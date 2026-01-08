<template>
  <div class="OpcionesaEscoger">
    <div
      class="Opciones"
      :class="{ activa: PestanaInfomacion }"
      @click="PrimeraPestana"
    >
      <img
        src="/informacion.png"
        :style="{
          width: logoWidth,
          height: logoheight,
        }"
        alt=""
      />
      <h1 v-show="MostrarTitulo">INFORMACION</h1>
    </div>

    <div
      class="Opciones"
      :class="{ activa: PestanaEstilo }"
      @click="SegundaPestana"
    >
      <img
        src="/navegador-web.png"
        :style="{
          width: logoWidth,
          height: logoheight,
        }"
        alt=""
      />
      <h1 v-show="MostrarTitulo">ESTILO</h1>
    </div>
  </div>

  <div class="OpcionSelecionado" ref="contenedor">
    <div class="contenido info" v-show="PestanaInfomacion" ref="info">
      <div class="as">
        <h1>Sobre mi</h1>
      </div>
      <div class="as2">
        <section class="info-grid">
          <div class="info-item">
            <span class="info-title">Versión:</span>
            <span class="info-value">Alpha</span>
          </div>
          <div class="info-item">
            <span class="info-title">Fecha de compilación:</span>
            <span class="info-value">01/12/2025</span>
          </div>
          <div class="info-item">
            <span class="info-title">Creado por:</span>
            <span class="info-value">Pablo Lin</span>
          </div>
          <div class="info-item">
            <span class="info-title">GitHub:</span>
            <span class="info-value"
              ><a
                href="https://github.com/LOSTYRL6/MysecondPortafolio"
                target="_blank"
                >Portafolio Github</a
              ></span
            >
          </div>
        </section>
      </div>
      <div class="as">
        <h1>Dessarollado con</h1>
      </div>
      <div class="as2">
        <div class="CajonesIconos">
          <img src="/vue.png" alt="" />
          <h4>Vue 3</h4>
        </div>
        <div class="CajonesIconos">
          <img src="/vite.png" alt="" />
          <h4>Vite</h4>
        </div>
        <div class="CajonesIconos">
          <img src="/gsap.png" alt="" />
          <h4>GSAP</h4>
        </div>
      </div>
    </div>
    <div class="contenido estilo" v-show="PestanaEstilo" ref="estilo">
      <img src="/gifgif.gif" alt="" />
      <h1>En Construccion</h1>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "OpcionesVentana",
  data() {
    return {
      PestanaInfomacion: true,
      PestanaEstilo: false,
      MostrarTitulo: true,
      logoheight: "45px",
      logoWidth: "45px",
    };
  },
  mounted() {
    const ro = new ResizeObserver((entries) => {
      for (let entry of entries) {
        this.anchoVentana = entry.contentRect.width;

        if (this.anchoVentana < 500) {
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
    PrimeraPestana() {
      if (this.PestanaInfomacion) return;
      this.animarCambio("info");
    },

    SegundaPestana() {
      if (this.PestanaEstilo) return;
      this.animarCambio("estilo");
    },

    animarCambio(nueva) {
      const actual = this.PestanaInfomacion ? "info" : "estilo";

      const salida = actual === "info" ? this.$refs.info : this.$refs.estilo;
      const entrada = nueva === "info" ? this.$refs.info : this.$refs.estilo;

      let salidaY, entradaY;

      if (actual === "info" && nueva === "estilo") {
        salidaY = -100;
        entradaY = 100;
      } else {
        salidaY = 100;
        entradaY = -100;
      }

      gsap.to(salida, {
        y: salidaY,
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
          this.PestanaInfomacion = nueva === "info";
          this.PestanaEstilo = nueva === "estilo";

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
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

h1,
h2,
h3 {
  font-family: "Segoe UI Semibold", Tahoma, sans-serif;
}

.OpcionesaEscoger {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.Opciones {
  width: 50%;
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
