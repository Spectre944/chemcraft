export const initialRecipes = [
    'Hydrogen + Oxygen',
    'Carbon + Oxygen',
    'Sodium + Chlorine',
];

export const basicReactions = {
    "Hydrogen + Hydrogen":          { result: "H2",                         emoji: "💧" },
    "Oxygen + Oxygen":              { result: "O2",                         emoji: "💧" },
    "Sulfur + Oxygen":              { result: "SO",                         emoji: "💧" },
    "SO + Oxygen":                  { result: "SO2",                        emoji: "💧" },
    "SO2 + Oxygen":                 { result: "SO3",                        emoji: "💧" },
    "SO3 + Oxygen":                 { result: "SO4",                        emoji: "💧" },
    "H2 + Oxygen":                  { result: "Water",                      emoji: "💧" },
    "Carbon + Oxygen":              { result: "CarbonDioxide",              emoji: "☁️" },
    "Sodium + Chlorine":            { result: "Salt",                       emoji: "🧂" },
    "Potassium + Chlorine":         { result: "Rock Salt",                  emoji: "🧂" },
    "Hydrogen + Chlorine":          { result: "Hydrochloric Acid | HCl",    emoji: "🧪" },
    "Hydrogen + Fluorine":          { result: "Hydrofluoric acid | HF",     emoji: "🧪" },
    "H2 + SO4":                     { result: "Sulfuric Acid | H2SO4",      emoji: "🧪" },
    "Iron + Oxygen":                { result: "Iron Oxide | FeO",           emoji: "⚗️" },
    "Al + O":                       { result: "Al2O3",                      emoji: "⚗️" },
    "Iron + Carbon":                { result: "Steel | Fe50C",              emoji: "⚔️" },
    "Copper + Tin":                 { result: "Bronze | SnCu3",             emoji: "🏺" },
};



export const acidReactions = {
    "Hydrogen + Chlorine": { result: "Hydrochloric Acid | HCL", emoji: "🧪" },
    "Hydrogen + Fluorine": { result: "Hydrofluoric acid | HF", emoji: "🧪" },
    "H2 + SO4": { result: "Sulfuric Acid | H2SO4", emoji: "🧪" },
};

export const oxideReactions = {
    "Fe + O": { result: "FeO", emoji: "⚗️" },
    "Al + O": { result: "Al2O3", emoji: "⚗️" },
};

export const alloyReactions = {
    "Fe + C": { result: "Steel", emoji: "⚔️" },
    "Cu + Sn": { result: "Bronze", emoji: "🏺" },
};