<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { gsap } from "gsap";
</script>

<template>
  <div class="ContainerPortafolio">
    <img
      class="SegundaImagen"
      src="/startingwindow.gif"
      alt=""
      v-if="CambiarPantalla"
    />

    <template v-else>
      <img
        src="/window.jpg"
        class="SegundaImagen"
        alt=""
        v-if="IniciarSesion"
      />
      <div class="contenedorDelMenu" v-if="IniciarSesion">
        <img src="/windowflower.png" alt="" />
        <p>Guess User</p>
        <button @click="cerrarMenu">Cerrar</button>
      </div>

      <div
        class="ContainerPortafolio Pantallanegra"
        v-show="MostrarPantallanegra == true"
      ></div>

      <div class="PantallaPrincipal" v-show="MostrarPantallaPrincipal == true">
        <img src="/Windows_7.png" alt="" class="PantallaPrincipalFoto" />
        <section class="parteSuperior"></section>
        <section class="hotbar">
          <img
            src="/botonConsola.png"
            alt="BotonDelMenu"
            class="HotbarIconos"
          />
        </section>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IniciarSesion: true,
      CambiarPantalla: true,
      MostrarPantallanegra: false,
      MostrarPantallaPrincipal: false,
    };
  },
  methods: {
    cerrarMenu() {
      const vm = this; // ← guardamos la referencia al componente
      this.MostrarPantallanegra = true;
      gsap.fromTo(
        ".Pantallanegra",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.3,
          onComplete() {
            gsap.to(".Pantallanegra", {
              opacity: 0,
              duration: 1,
            });
            vm.MostrarPantallaPrincipal = true;
            gsap.fromTo(
              ".PantallaPrincipal",
              { opacity: 0 },
              { opacity: 1, duration: 1 }
            );
          },
        }
      );

      setTimeout(() => {
        this.IniciarSesion = false;
      }, 200);
    },
  },
  mounted() {
    setTimeout(() => {
      this.CambiarPantalla = false;
    }, 7650);
  },

  watch: {
    CambiarPantalla(newValue) {
      // if (!newValue) {
      //   // Animación de fondo
      //   gsap.fromTo(
      //     ".SegundaImagen",
      //     { opacity: 0 },
      //     { opacity: 1, duration: 1 }
      //   );
      //   // Animación del menú
      //   gsap.from(".contenedorDelMenu", {
      //     y: -50,
      //     opacity: 0,
      //     duration: 1,
      //     delay: 0.2,
      //     ease: "power2.out",
      //   });
      // }
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
  position: relative;
}

.Pantallanegra {
  position: absolute;
  background-color: black;
  top: 0;
  left: 0;
  z-index: 1;
}
.PantallaPrincipal {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.PantallaPrincipalFoto {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.parteSuperior {
  width: 100%;
  height: 93%;
  border: solid 1px blue;
}
.hotbar {
  width: 100%;
  height: 7%;
  border: solid rgb(0, 0, 0) 1px;
  background-color: rgba(0, 0, 0, 0.305);
  display: flex;
  flex-direction: row;
}

.HotbarIconos {
  width: 50px;
  height: 50px;
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
  z-index: 1;
  border: solid red 1px;
}
.contenedorDelMenu img {
  width: 150px;
  height: 150px;
}
.contenedorDelMenu p {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
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

.SegundaImagen {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  transition: opacity 0.5s ease;
}
</style>
