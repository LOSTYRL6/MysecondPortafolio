<template>
  <div class="OpcionesaEscoger">
    <!-- Pestaña 1 -->
    <div
      class="Opciones"
      :class="{ activa: PestanaFrontend }"
      @click="PrimeraPestana"
    >
      <img
        src="../../../public/monitor.png"
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
        src="../../../public/engranajes.png"
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
        src="../../../public/bd.png"
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
        src="../../../public/herramientas.png"
        :style="{ width: logoWidth, height: logoheight }"
        alt=""
      />
      <h1 v-show="MostrarTitulo">Other</h1>
    </div>
  </div>

  <div class="OpcionSelecionado" ref="contenedor">
    <!-- Contenido 1 -->
    <div class="contenido info" v-if="PestanaFrontend" ref="info">
      <Swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        :style="{ width: cardWidth, height: cardheight }"
        class="mySwiper"
      >
        <swiper-slide v-for="(card, index) in cartas" :key="index">
          <div :style="{ width: cardWidth, height: cardheight }" class="card">
            <div class="content">
              <div class="back">
                <div class="back-content">
                  <img src="../../../monitor.png" alt="" />
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                  <div class="title">
                    <img :src="card.imagen" alt="" />
                  </div>
                  <div class="description">
                    <h2 :style="{ fontSize: TituloSize, marginBottom: '5px' }">
                      {{ card.title }}
                    </h2>
                    <p
                      v-for="(DescripcionUnica, a) in card.description"
                      :key="a"
                      :style="{ fontSize: TextSize }"
                    >
                      {{ DescripcionUnica }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>

    <!-- Contenido 2 -->
    <div class="contenido estilo" v-if="PestanaBackend" ref="estilo">
      <Swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        :style="{ width: cardWidth, height: cardheight }"
        class="mySwiper"
      >
        <swiper-slide v-for="(card, index) in cartas2" :key="index">
          <div :style="{ width: cardWidth, height: cardheight }" class="card">
            <div class="content">
              <div class="back">
                <div class="back-content">
                  <img src="../../../engranajes.png" alt="" />
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                  <div class="title">
                    <img :src="card.imagen" alt="" />
                  </div>
                  <div class="description">
                    <h2 :style="{ fontSize: TituloSize, marginBottom: '5px' }">
                      {{ card.title }}
                    </h2>
                    <p
                      v-for="(DescripcionUnica, a) in card.description"
                      :key="a"
                      :style="{ fontSize: TextSize }"
                    >
                      {{ DescripcionUnica }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>

    <!-- Contenido 3 -->
    <div class="contenido A" v-if="PestanaDB" ref="A">
      <Swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        :style="{ width: cardWidth, height: cardheight }"
        class="mySwiper"
      >
        <swiper-slide v-for="(card, index) in cartas3" :key="index">
          <div :style="{ width: cardWidth, height: cardheight }" class="card">
            <div class="content">
              <div class="back">
                <div class="back-content">
                  <img src="../../../bd.png" alt="" />
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                  <div class="title">
                    <img :src="card.imagen" alt="" />
                  </div>
                  <div class="description">
                    <h2 :style="{ fontSize: TituloSize, marginBottom: '5px' }">
                      {{ card.title }}
                    </h2>
                    <p
                      v-for="(DescripcionUnica, a) in card.description"
                      :key="a"
                      :style="{ fontSize: TextSize }"
                    >
                      {{ DescripcionUnica }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>

    <!-- Contenido 4 (nuevo) -->
    <div class="contenido B" v-if="PestanaOther" ref="B">
      <Swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        :style="{ width: cardWidth, height: cardheight }"
        class="mySwiper"
      >
        <swiper-slide v-for="(card, index) in cartas4" :key="index">
          <div :style="{ width: cardWidth, height: cardheight }" class="card">
            <div class="content">
              <div class="back">
                <div class="back-content">
                  <img src="../../../herramientas.png" alt="" />
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                  <div class="title">
                    <img :src="card.imagen" alt="" />
                  </div>
                  <div class="description">
                    <h2 :style="{ fontSize: TituloSize, marginBottom: '5px' }">
                      {{ card.title }}
                    </h2>
                    <p
                      v-for="(DescripcionUnica, a) in card.description"
                      :key="a"
                      :style="{ fontSize: TextSize }"
                    >
                      {{ DescripcionUnica }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { nextTick } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

export default {
  name: "OpcionesVentana",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      // ESTADOS DE LAS 4 PESTAÑAS
      PestanaFrontend: true,
      PestanaBackend: false,
      PestanaDB: false,
      PestanaOther: false,
      cardWidth: "230px",
      cardheight: "350px",
      MostrarTitulo: true,
      logoheight: "45px",
      logoWidth: "45px",
      TituloSize: "40px",
      TextSize: "20px",
      modules: [EffectCards],
      cartas: [
        {
          title: "HTML",
          description: ["- Estructura semántica", "- Buenas prácticas"],
          backText: "Hover Me 1",
          imagen: "./html.png",
        },
        {
          title: "CSS",
          description: ["- Flexbox y Grid", "- Responsive", "- Animaciones"],
          backText: "Hover Me 2",
          imagen: "./css.png",
        },
        {
          title: "JavaScripts",
          description: [
            "- Manejo de eventos",
            "- Manipulación del DOM",
            "- Fetch / Axios",
          ],
          backText: "Hover Me 3",
          imagen: "./js.png",
        },
        {
          title: "Bootstrap",
          description: [
            "- Sistema de grid",
            "- Componentes UI",
            "- Responsive rápido",
          ],
          backText: "Hover Me 4",
          imagen: "./boot.png",
        },
        {
          title: "SCSS",
          description: ["- Flexbox y Grid", "- Responsive", "- Animaciones"],
          backText: "Hover Me 4",
          imagen: "./scss.png",
        },
        {
          title: "Vue",
          description: ["- v-if / v-for", "- v-bind", "- Props y emits"],
          backText: "Hover Me 5",
          imagen: "./vue.png",
        },
        {
          title: "React",
          description: [
            "- useState",
            "- useEffect",
            "- Componentes reutilizables",
          ],
          backText: "Hover Me 6",
          imagen: "./react.png",
        },
      ],

      cartas2: [
        {
          title: "Java",
          description: ["- Clases y objetos", "- POO", "- Swing"],
          backText: "Hover Me 1",
          imagen: "./java.png",
        },
        {
          title: "PHP",
          description: ["- Conexión a BD", "- Sesion y cookie", "- CRUD"],
          backText: "Hover Me 2",
          imagen: "./php.png",
        },
        {
          title: "Eloquent",
          description: ["- Autenticación", "- Validación", "- Controllers"],
          backText: "Hover Me 3",
          imagen: "./laravel.png",
        },
        {
          title: "Node.js",
          description: ["- Servidor", "- Npm", "- APIs REST"],
          backText: "Hover Me 4",
          imagen: "./node.png",
        },
      ],
      cartas3: [
        {
          title: "MySQL",
          description: ["- JOIN", "- Entitat y relacio ", "- Consulta"],
          backText: "Hover Me 1",
          imagen: "./mysql.png",
        },
        {
          title: "MongoDB",
          description: ["- NoSQL básico", "- Consulta basico"],
          backText: "Hover Me 2",
          imagen: "./mongo.png",
        },
      ],

      cartas4: [
        {
          title: "Git",
          description: ["- Control de versiones", "- Comandos", "- Commits"],
          backText: "Hover Me 1",
          imagen: "./git.png",
        },
        {
          title: "Github",
          description: ["- Branch", "- Repositorio", "- Claves para API"],
          backText: "Hover Me 2",
          imagen: "./github.png",
        },
        {
          title: "Wordpress",
          description: [
            "- SEO",
            "- Temas y plugins",
            "- Personalización básica",
          ],
          backText: "Hover Me 3",
          imagen: "./wordpress.png",
        },
        {
          title: "GSAP",
          description: [
            "- Animaciones avanzadas",
            "- ScrollTrigger",
            "- Integración con Vue y React",
          ],
          backText: "Hover Me 4",
          imagen: "./gsap.png",
        },
        {
          title: "Swiper",
          description: [
            "- Sliders interactivos",
            "- Carruseles responsive",
            "- Integración en Vue",
          ],
          backText: "Hover Me 5",
          imagen: "./swiper.png",
        },
      ],
    };
  },

  mounted() {
    const ro = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const ancho = entry.contentRect.width;

        if (ancho < 500) {
          this.logoheight = "27px";
          this.logoWidth = "27px";
          this.cardWidth = "170px";
          this.cardheight = "250px";
          this.MostrarTitulo = false;
          this.TituloSize = "27.5px";
          this.TextSize = "10px";
        } else {
          this.logoheight = "45px";
          this.cardWidth = "230px";
          this.cardheight = "350px";
          this.logoWidth = "45px";
          this.MostrarTitulo = true;
          this.TituloSize = "40px";
          this.TextSize = "20px";
        }
      }
    });

    ro.observe(this.$el.parentElement);
  },

  methods: {
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
    animarCambio(nueva) {
      let actual = "info";
      if (this.PestanaBackend) actual = "estilo";
      if (this.PestanaDB) actual = "A";
      if (this.PestanaOther) actual = "B";

      const salida = this.$refs[actual];
      const salidaY = -100;

      gsap.to(salida, {
        y: salidaY,
        opacity: 0,
        duration: 0.25,
        onComplete: async () => {
          // ACTUALIZAR ESTADOS
          this.PestanaFrontend = nueva === "info";
          this.PestanaBackend = nueva === "estilo";
          this.PestanaDB = nueva === "A";
          this.PestanaOther = nueva === "B";

          await nextTick();

          const entrada = this.$refs[nueva];
          const entradaY = 100;
          gsap.fromTo(
            entrada,
            { y: entradaY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.25 }
          );

          // Si es Swiper, actualizarlo para que recalcule el tamaño
          if (nueva === "B" && entrada.swiper) {
            entrada.swiper.update();
          }
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
  justify-content: center;
  align-items: center;
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

.swiper {
  width: 230px;
  height: 350px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
/* From Uiverse.io by ElSombrero2 */
.card {
  overflow: visible;
  width: 230px;
  height: 350px;
}

.content {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0px 0px 10px 1px #000000ee;
  border-radius: 5px;
}

.front,
.back {
  background-color: #151515;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
}

.back {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.back::before {
  position: absolute;
  content: " ";
  display: block;
  width: 160px;
  height: 160%;
  background: linear-gradient(
    90deg,
    transparent,
    #24b134,
    #221bea,
    #e7ff34,
    #ff0000,
    transparent
  );
  animation: rotation_481 5000ms infinite linear;
}

.back-content {
  position: absolute;
  width: 95%;
  height: 95%;
  background-color: #000000;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.back-content img {
  width: 100px;
  height: 100px;
}

.card:hover .content {
  transform: rotateY(180deg);
}

@keyframes rotation_481 {
  0% {
    transform: rotateZ(0deg);
  }

  0% {
    transform: rotateZ(360deg);
  }
}

.front {
  transform: rotateY(180deg);
  color: white;
}

.front .front-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.front-content .badge {
  background-color: #00000055;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
}

.description {
  box-shadow: 0px 0px 10px 5px #00000088;
  width: 100%;
  height: 50%;
  background-color: #ffffff;
  backdrop-filter: blur(5px);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: black;
}

.title {
  font-size: 11px;
  max-width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title img {
  width: 75%;
  height: 75%;
}

.title p {
  width: 50%;
}

.card-footer {
  color: #ffffff88;
  margin-top: 5px;
  font-size: 8px;
}

.front .img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #ffbb66;
  position: relative;
  filter: blur(15px);
  animation: floating 2600ms infinite linear;
}

#bottom {
  background-color: #ff8866;
  left: 50px;
  top: 0px;
  width: 150px;
  height: 150px;
  animation-delay: -800ms;
}

#right {
  background-color: #ff2233;
  left: 160px;
  top: -80px;
  width: 30px;
  height: 30px;
  animation-delay: -1800ms;
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
