<script setup>
import { useUsuarios } from './composables/useUsuarios';


const { nombresFiltrados, busqueda } = useUsuarios()
</script>

<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitio ql xD</title>
  </head>
  <body>
    
    <input type="text" v-model="busqueda" placeholder="Buscar">
    <ul>
      <li v-for="nombre in nombresFiltrados" :key="nombre">
        {{ nombre }}
      </li>
    </ul>
  </body>
  </html>
  
</template>