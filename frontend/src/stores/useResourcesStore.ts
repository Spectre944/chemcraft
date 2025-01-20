import {ref} from 'vue'
import {defineStore} from 'pinia'
import {useLocalStorage} from "@vueuse/core";

export interface ResourceStoreEntry {
    title: string
    emoji: string
}

export const useResourcesStore = defineStore('resources', () => {
    const resources =
        useLocalStorage<ResourceStoreEntry[]>('chemcraft/resources', [ // Изменён ключ с 'opencraft' на 'chemcraft'
            {title: 'Hydrogen', emoji: '⚪'},  // Водород
            {title: 'Oxygen', emoji: '🔵'},   // Кислород
            {title: 'Carbon', emoji: '⚫'},    // Углерод
            {title: 'Sodium', emoji: '🟡'},   // Натрий
            {title: 'Chlorine', emoji: '🟢'}, // Хлор
        ]);
    function addResource(box: ResourceStoreEntry) {
        resources.value.push(box)
    }

    return { resources, addResource}
})

