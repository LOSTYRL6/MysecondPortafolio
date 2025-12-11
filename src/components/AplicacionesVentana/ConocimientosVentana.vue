<template>
  <div class="OpcionesaEscoger">
    <!-- Pestaña 1 -->
    <div
      class="Opciones"
      :class="{ activa: PestanaFrontend }"
      @click="PrimeraPestana"
    >
      <img
        src="../../../public/informacion.png"
        :style="{ width: logoWidth, height: logoheight }"
        alt=""
      />
      <h1 v-show="MostrarTitulo">Front End</h1>
    </div>

    <!-- Pestaña 2 -->
    <div
      class="Opciones"
      :class="{ activa: PestanaBackend }"
      @click="SegundaPestana"
    >
      <img
        src="../../../public/navegador-web.png"
        :style="{ width: logoWidth, height: logoheight }"
        alt=""
      />
      <h1 v-show="MostrarTitulo">Back end</h1>
    </div>

    <!-- Pestaña 3 -->
    <div
      class="Opciones"
      :class="{ activa: PestanaDB }"
      @click="TerceraPestana"
    >
      <img
        src="../../../public/navegador-web.png"
        :style="{ width: logoWidth, height: logoheight }"
        alt=""
      />
      <h1 v-show="MostrarTitulo">Database</h1>
    </div>

    <!-- Pestaña 4 (Nueva) -->
    <div
      class="Opciones"
      :class="{ activa: PestanaOther }"
      @click="CuartaPestana"
    >
      <img
        src="../../../public/vue.png"
        :style="{ width: logoWidth, height: logoheight }"
        alt=""
      />
      <h1 v-show="MostrarTitulo">Other</h1>
    </div>
  </div>

  <div class="OpcionSelecionado" ref="contenedor">
    <!-- Contenido 1 -->
    <div class="contenido info" v-show="PestanaFrontend" ref="info"></div>

    <!-- Contenido 2 -->
    <div class="contenido estilo" v-show="PestanaBackend" ref="estilo">
      <img src="../../../public/gifgif.gif" alt="" />
      <h1>En Construccion</h1>
    </div>

    <!-- Contenido 3 -->
    <div class="contenido A" v-show="PestanaDB" ref="A"></div>

    <!-- Contenido 4 (nuevo) -->
    <div class="contenido B" v-show="PestanaOther" ref="B">
      <img
        src="https://media.tenor.com/h3xXlFchdbEAAAAC/thumbs-up-tboi.gif"
        alt="Thumbs Up Tboi"
        style="width: 100%; max-width: 300px"
      />
      <h1>En Construcción</h1>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "OpcionesVentana",
  data() {
    return {
      // ESTADOS DE LAS 4 PESTAÑAS
      PestanaFrontend: true,
      PestanaBackend: false,
      PestanaDB: false,
      PestanaOther: false,

      // RESPONSIVE
      MostrarTitulo: true,
      logoheight: "45px",
      logoWidth: "45px",
    };
  },

  mounted() {
    const ro = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const ancho = entry.contentRect.width;

        if (ancho < 500) {
          this.logoheight = "27px";
          this.logoWidth = "27px";
          this.MostrarTitulo = false;
        } else {
          this.logoheight = "45px";
          this.logoWidth = "45px";
          this.MostrarTitulo = true;
        }
      }
    });

    ro.observe(this.$el.parentElement);
  },

  methods: {
    // --- MÉTODOS DE PESTAÑAS ---

    PrimeraPestana() {
      if (this.PestanaFrontend) return;
      this.animarCambio("info");
    },

    SegundaPestana() {
      if (this.PestanaBackend) return;
      this.animarCambio("estilo");
    },

    TerceraPestana() {
      if (this.PestanaDB) return;
      this.animarCambio("A");
    },

    CuartaPestana() {
      if (this.PestanaOther) return;
      this.animarCambio("B");
    },

    // --- ANIMACIÓN GSAP ---
    animarCambio(nueva) {
      // Detectar cuál pestaña está activa actualmente
      let actual = "info";
      if (this.PestanaBackend) actual = "estilo";
      if (this.PestanaDB) actual = "A";
      if (this.PestanaOther) actual = "B";

      const salida = this.$refs[actual];
      const entrada = this.$refs[nueva];

      const salidaY = -100;
      const entradaY = 100;

      gsap.to(salida, {
        y: salidaY,
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
          // ACTUALIZAR ESTADOS
          this.PestanaFrontend = nueva === "info";
          this.PestanaBackend = nueva === "estilo";
          this.PestanaDB = nueva === "A";
          this.PestanaOther = nueva === "B";

          // ANIMAR ENTRADA
          gsap.fromTo(
            entrada,
            { y: entradaY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.25 }
          );
        },
      });
    },
  },
};
</script>

<style scoped>
.OpcionesaEscoger {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.Opciones {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.activa {
  background-color: blue;
  color: white;
}

.Opciones img {
  width: 45px;
  height: 45px;
  margin-right: 10px;
}

/* CONTENEDOR PRINCIPAL */
.OpcionSelecionado {
  width: 100%;
  height: 90%;
  position: relative;
  overflow-y: auto; /* permite scroll vertical si el contenido excede */
  overflow-x: hidden; /* evita scroll horizontal */
  background-color: rgb(237, 237, 237);
}

/* CONTENIDOS INTERNOS */
.contenido {
  display: flex;
  width: 100%;
  min-height: 100%;
  align-items: center;
  flex-direction: column;
  overflow: auto;
}
.contenido:nth-child(2) {
  justify-content: center;
}

.estilo img {
  width: 200px;
  height: 200px;
}
.as {
  width: 100%;
  height: 50px;
  background-color: rgb(218, 218, 218);
  display: flex;
  align-items: center;
  padding: 5px;
}
.as2 {
  width: 100%;
  min-height: 100px;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.as2 section {
  margin-left: 20px;
  width: 340px;
  height: 90%;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.CajonesIconos {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
}

.as2 .info-grid {
  display: flex;
  flex-direction: column;
  gap: 8px; /* espacio vertical entre items */
  color: #000;
}

.as2 .info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
}

.as2 .info-title {
  font-weight: bold;
  margin-right: 10px; /* separación entre título y valor */
}

.as2 .info-value a {
  color: rgb(0, 0, 0);
  text-decoration: underline;
}
.as2 img {
  width: 75px;
  height: 75px;
}
</style>
