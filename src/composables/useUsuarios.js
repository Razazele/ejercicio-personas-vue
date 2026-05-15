// src/composables/useUsuarios.js
import { ref, computed, onMounted } from 'vue';

export function useUsuarios() {
    // 1. Estado reactivo interno
    const nombres = ref([]);
    const busqueda = ref('');

    // 2. Lógica de la API
    const cargarUsuarios = async () => {
        try {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
            const datos = await respuesta.json();
            nombres.value = datos.map(user => user.name);
        } catch (error) {
            console.error("Error al traer usuarios:", error);
        }
    };

    // 3. Lógica del filtro (Computed Property)
    const nombresFiltrados = computed(() => {
        return nombres.value.filter(nombre =>
            nombre.toLowerCase().includes(busqueda.value.toLowerCase())
        );
    });

    // 4. Ciclo de vida
    onMounted(() => {
        cargarUsuarios();
    });

    // Al final, exponemos solo lo que el componente necesita usar
    return {
        busqueda,
        nombresFiltrados
    };
}