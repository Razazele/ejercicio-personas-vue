<script setup>
import { ref, onMounted } from 'vue';

// 1. Definimos el estado inicial (un ref para el array vacío)
const nombres = ref([]);

// 2. La función para cargar datos
const cargarUsuarios = async () => {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const datos = await respuesta.json();
    // En Vue, mutamos el .value directamente
    nombres.value = datos.map(user => user.name);
  } catch (error) {
    console.error("Error cargando usuarios:", error);
  }
};

// 3. Ejecutamos al montar el componente
onMounted(() => {
  cargarUsuarios();
});
</script>

<template>
  <ul>
    <li v-for="nombre in nombres" :key="nombre">
      {{ nombre }}
    </li>
  </ul>
</template>