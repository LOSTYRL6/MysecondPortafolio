<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="ContainerPortafolio">
    <div class="contenedorDelMenu" v-if="IniciarSesion">
      <div class="cubo"></div>
      <button @click="cerrarMenu"></button>
    </div>
    <div v-else>Hola</div>
    <img src="/public/window.jpg" alt="" />
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>
<script>
export default {
  data() {
    return {
      IniciarSesion: true,
    };
  },
  methods: {
    cerrarMenu() {
      this.IniciarSesion = false;
    },
  },
};
</script>

<style scoped>
.ContainerPortafolio {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.contenedorDelMenu {
  width: 300px;
  height: auto;
  min-height: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.cubo {
  width: 50px;
  height: 50px;
  border: solid black 1px;
  margin-bottom: 5px;
}
button {
  width: 100px;
  height: 25px;
}
.ContainerPortafolio img {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
}
</style>
