<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { gsap } from "gsap";
import Aplicaciones from "./components/Aplicaciones.vue";
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
      <div class="contenedorDelMenu" v-show="IniciarSesion">
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
        <section class="parteSuperior">
          <div class="ContenedorDelAplicaciones">
            <aplicaciones
              v-for="(AplicacionesUnicas, index) in AplicacioneExistente"
              :key="index"
              :Nombre="AplicacionesUnicas.Nombre"
              :id="AplicacionesUnicas.id"
              :imagenes="AplicacionesUnicas.imagenes"
              @click="abrirVentana(AplicacionesUnicas)"
            />
            <ventana
              v-for="ventana in ventanasAbiertas"
              :key="ventana.id"
              :titulo="ventana.Nombre"
              :id="ventana.id"
              :minimizado="ventana.minimizado"
              @toggle="toggleVentana"
              @cerrar="cerrarVentana"
            >
              <component :is="ventana.componente" />
            </ventana>
          </div>
        </section>
        <section class="hotbar">
          <img
            src="/BotonConsolaEncendido.png"
            alt="BotonDelMenu"
            class="HotbarIconos"
            @click="AbrirHotfix"
          />

          <div class="HotbarVentanas">
            <div
              v-for="ventana in ventanasAbiertas"
              :key="ventana.id"
              class="HotbarIconoVentana"
              @click="toggleVentana(ventana.id)"
            >
              <img :src="ventana.imagenes" alt="" />
            </div>
          </div>

          <div class="MenuDelHotfix" v-show="MostrarMenuHotFix">
            <div class="buenoEjemplo1"></div>
            <div class="buenoEjemplo2">
              <img src="/windowflower.png" alt="" class="flowerIconos" />
              <div class="ApagarButton">
                <button @click="ApagarLaPantalla">Apagar</button>
                <div>
                  <img src="/play.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  components: { Aplicaciones },
  data() {
    return {
      IniciarSesion: true,
      CambiarPantalla: true,
      MostrarPantallanegra: false,
      MostrarPantallaPrincipal: false,
      MostrarMenuHotFix: false,
      AplicacioneExistente: [
        {
          Nombre: "Chrome",
          id: "Chrome",
          imagenes: "./cromo.png",
          componente: "ChromeVentana",
        },
        {
          Nombre: "Opciones",
          id: "Opciones",
          imagenes: "./pc.png",
          componente: "OpcionesVentana",
        },
        {
          Nombre: "Curriculum",
          id: "Curriculum",
          imagenes: "./pdf.png",
          componente: "CurriculumVentana",
        },
      ],
      ventanasAbiertas: [], // <-- Aquí
    };
  },
  methods: {
    cerrarMenu() {
      const vm = this;
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

    AbrirHotfix() {
      const vm = this;
      this.MostrarMenuHotFix = !this.MostrarMenuHotFix;
    },

    ApagarLaPantalla() {
      const vm = this;
      this.MostrarMenuHotFix = !this.MostrarMenuHotFix;
      this.MostrarPantallanegra = true;
      this.MostrarPantallaPrincipal = false;
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
            vm.IniciarSesion = true;
            gsap.fromTo(
              ".contenedorDelMenu",
              { opacity: 0 },
              { opacity: 1, duration: 1 }
            );
            vm.MostrarPantallanegra = false;
          },
        }
      );
    },
    abrirVentana(app) {
      if (!this.ventanasAbiertas.find((v) => v.id === app.id)) {
        this.ventanasAbiertas.push({
          ...app,
          minimizado: false,
        });
      }
    },

    cerrarVentana(id) {
      this.ventanasAbiertas = this.ventanasAbiertas.filter((v) => v.id !== id);
    },

    toggleVentana(id) {
      const ventana = this.ventanasAbiertas.find((v) => v.id === id);
      if (!ventana) return;

      ventana.minimizado = !ventana.minimizado;
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
  overflow: hidden;
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
  overflow: hidden;
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
  position: relative;
  display: flex;
}
.hotbar {
  position: relative;
  width: 100%;
  height: 7%;
  border: solid rgb(0, 0, 0) 1px;
  background-color: rgba(0, 0, 0, 0.305);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 7px;
}
.ContenedorDelAplicaciones {
  display: flex;
  flex-direction: column; /* hace que los hijos se apilen verticalmente */
  flex-wrap: wrap; /* opcional, pero puedes quitarlo si no quieres wrap */
  height: 100%;
  min-width: 100px;
  width: 100%;
  overflow-y: auto;
  max-height: 100%; /* o la altura que quieras limitar */
  align-content: flex-start; /* hace que las columnas se peguen a la izquierda */
  position: relative;
}
.HotbarIconoVentana {
  width: 50px;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px;
}
.HotbarIconoVentana:hover {
  background-color: rgba(99, 99, 99, 0.449);
}

.HotbarIconos {
  width: 50px;
  height: 80%;
}
.HotbarIconos:hover {
  content: url("/public/BotonConsola.png");
  cursor: pointer;
}
.MenuDelHotfix {
  width: 400px;
  height: 500px;
  background: linear-gradient(
    to bottom,
    rgba(173, 216, 230, 0.1) 0%,
    rgba(0, 70, 150, 0.8) 40%,
    rgba(0, 70, 150, 0.8) 60%,
    rgba(173, 216, 230, 0.1) 100%
  );
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  position: absolute;
  left: 0;
  top: -500px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  display: flex;
}
.buenoEjemplo1 {
  width: 57%;
  height: 95%;
  background-color: white;
  border-radius: 5px;
}
.buenoEjemplo2 {
  width: 36%;
  height: 95%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: end;
  align-items: center;
}
.flowerIconos {
  position: absolute;
  left: 30%;
  top: -30px;
  height: 60px;
  height: 60px;
}
.ApagarButton {
  width: 70%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgba(173, 216, 230, 0.1) 0%,
    rgba(0, 70, 150, 0.8) 40%,
    rgba(0, 70, 150, 0.8) 60%,
    rgba(173, 216, 230, 0.1) 100%
  );
}
.ApagarButton button {
  width: 80%;
  height: 100%;
  background-color: transparent;
  color: white;
  border: solid black 1px;
  cursor: pointer;
}
.ApagarButton div {
  position: relative;
  display: flex;
  width: 20px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: solid black 1px;
}
.ApagarButton div img {
  width: 40%;
  height: 20%;
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
.HotbarVentanas {
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: 10px;
  align-items: center;
}
.HotbarVentanas img {
  width: 70%;
  height: 90%;
}
</style>
