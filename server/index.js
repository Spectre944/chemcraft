import Fastify from 'fastify';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { fileURLToPath } from "url";
import path from "path";
import cors from '@fastify/cors';
import { initialRecipes, basicReactions } from './reactions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db;

async function initializeDatabase() {
    db = await open({
        filename: path.join(__dirname, 'chemistry.db'),
        driver: sqlite3.Database
    });
    
    await db.exec(`
        CREATE TABLE IF NOT EXISTS reactions (
            id INTEGER PRIMARY KEY,
            reactant1 TEXT,
            reactant2 TEXT,
            product TEXT,
            emoji TEXT
        )
    `);

    // Заполняем базу данных начальными реакциями
    for (const [reaction, result] of Object.entries(basicReactions)) {
        const [reactant1, reactant2] = reaction.split(' + ');
        await db.run(
            'INSERT OR IGNORE INTO reactions (reactant1, reactant2, product, emoji) VALUES (?, ?, ?, ?)',
            [reactant1, reactant2, result.result, result.emoji]
        );
    }
}

await initializeDatabase();

const fastify = Fastify({
    logger: true,
    requestTimeout: 30 * 1000
});

await fastify.register(cors, {
    origin: true
});

async function findReaction(reactant1, reactant2) {
    // Пробуем найти реакцию в обоих направлениях
    let result = await db.get(
        'SELECT product, emoji FROM reactions WHERE (reactant1 = ? AND reactant2 = ?) OR (reactant1 = ? AND reactant2 = ?)',
        [reactant1, reactant2, reactant2, reactant1]
    );
    
    return result || { product: '', emoji: '' };
}

fastify.route({
    method: 'GET',
    url: '/',
    handler: async (request, reply) => {
        reply.type('application/json').code(200);
        
        const result = {};
        for (const recipe of initialRecipes) {
            const [first, second] = recipe.split(' + ');
            result[recipe] = await findReaction(first, second);
        }
        return result;
    }
});

fastify.route({
    method: 'POST',
    url: '/',
    handler: async (request, reply) => {
        if (!request?.body?.first || !request?.body?.second) {
            reply.code(400).send({ error: 'Missing reactants' });
            return;
        }

        const reactant1 = request.body.first.trim();
        const reactant2 = request.body.second.trim();
        
        const result = await findReaction(reactant1, reactant2);
        
        reply.type('application/json').code(200);
        return {
            result: result.product,
            emoji: result.emoji
        };
    }
});

try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}