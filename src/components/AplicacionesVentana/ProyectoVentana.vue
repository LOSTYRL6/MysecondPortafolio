<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#000000',
      '--swiper-pagination-color': '#000000',
    }"
    :speed="600"
    :parallax="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <div class="parallax-bg" data-swiper-parallax="-23%"></div>
    <template v-for="(proyecto, index) in proyectos" :key="index">
      <swiper-slide class="IntroduccionSlide">
        <img :src="proyecto.imagen" class="Fondo" alt="" />
        <div class="title" data-swiper-parallax="-300">
          {{ proyecto.titulo }}
        </div>
        <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
        <div
          :style="{ maxWidth: MaximoText }"
          class="text"
          data-swiper-parallax="-100"
        >
          <p>{{ proyecto.descripcion }}</p>
        </div>
      </swiper-slide>
      <swiper-slide class="ContenidoDelSlide">
        <section :style="{ height: sectionheightFirst }">
          <div
            class="Complemento ComplementoCategoria"
            :style="{ width: complementWidth[0], height: complementHeight }"
          >
            <div v-for="tech in proyecto.tecnologias" :key="tech">
              {{ tech }}
            </div>
          </div>
          <div
            class="Complemento segundootexto"
            :style="{ width: complementWidth[1], height: complementHeight }"
          >
            <h3 v-for="text in proyecto.segundoContenido" :key="text">
              {{ text }}
            </h3>
          </div>
          <div
            class="Complemento"
            :style="{ width: complementWidth[2], height: complementHeight }"
          >
            <div class="Github">
              <a :href="proyecto.github">
                <img src="../../../githubviolet.png" alt="" />
                <h2>{{ proyecto.titulo }}</h2>
              </a>
            </div>
          </div>
        </section>

        <section
          :style="{ height: sectionheightSecond }"
          class="flip-cards-container"
        >
          <div
            class="flip-card"
            :style="{ height: cardHeight, width: cardwidth }"
            v-for="(card, index) in proyecto.cartasFlip"
            :key="index"
          >
            <div class="flip-card-inner" :class="{ flipped: card.flipped }">
              <!-- Front -->
              <div class="flip-card-front">
                <button class="flip-btn" @click="card.flipped = !card.flipped">
                  ↻
                </button>
                <img :src="card.frontimg" alt="" />
              </div>

              <!-- Back -->
              <div class="flip-card-back">
                <button class="flip-btn" @click="card.flipped = !card.flipped">
                  ↻
                </button>
                <img :src="card.backimg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </swiper-slide>
    </template>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      MaximoText: "400px",
      sectionheightFirst: "35%",
      sectionheightSecond: "65%",
      flip1: false,
      flip2: false,
      cardHeight: "325px",
      cardwidth: "550px",
      sectionheight: "50%",
      complementWidth: ["35%", "35%", "20%"],
      complementHeight: "90%",

      proyectos: [
        {
          imagen: "./project1.png",
          titulo: "Projecto Cientifiks",
          descripcion:
            "Página web propuesta por un grupo de niños, quienes nos proporcionaron las directrices...",
          tecnologias: ["HTML", "CSS", "JavaScript", "PHP"],
          segundoContenido: [
            "BFS",
            "Utilizar PHP para conectar al BD",
            "Creacion de juego con Javascripts",
          ],
          github: "#",
          contenidoSecondSection: "Contenido del segundo section",
          cartasFlip: [
            {
              frontimg: "./1.png",
              backimg: "./2.png",
              flipped: false,
            },
            {
              frontimg: "./4.png",
              backimg: "./5.gif",
              flipped: false,
            },
          ],
        },
        {
          imagen: "./project2.png",
          titulo: "TaskForge",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          tecnologias: ["MySQL", "PHP", "Bootstrap"],
          segundoContenido: [
            "Implementacion de drag and drop",
            "Utilizacion de cookie y sesion",
            "Utilizar Json para cambiar contenido",
          ],
          github: "#",
          contenidoSecondSection: "Contenido del segundo section",
          cartasFlip: [
            {
              frontimg: "./6.png",
              backimg: "./7.png",
              flipped: false,
            },
            {
              frontimg: "./8.png",
              backimg: "./9.gif",
              flipped: false,
            },
          ],
        },
        {
          imagen: "./project3.png",
          titulo: "Sing & Drink",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          tecnologias: ["Vue", "Laravel", "Eloquent", "GSAP", "SCSS"],
          segundoContenido: [
            "Usar el framework de lavavel eloquent",
            "Utilizacion del Mapbox",
            "Utilizacion del controller para enviar datos",
          ],
          github: "#",
          contenidoSecondSection: "Contenido del segundo section",
          cartasFlip: [
            {
              frontimg: "Card 1",
              backimg: "Back 1",
              flipped: false,
            },
            {
              frontimg: "Card 2",
              backimg: "Back 2",
              flipped: false,
            },
          ],
        },
        {
          imagen: "./project4.png",
          titulo: "GGGamers",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          tecnologias: ["Vue", "Laravel", "GSAP", "MAPBOX", "SWIPER.JS"],
          segundoContenido: [
            "Algoritmo de busqueda",
            "Enviacion de email y contenido con QR",
            "Utilizar Axios para mandar informacion",
          ],
          github: "#",
          contenidoSecondSection: "Contenido del segundo section",
          cartasFlip: [
            {
              frontimg: "Card 1",
              backimg: "Back 1",
              flipped: false,
            },
            {
              frontimg: "Card 2",
              backimg: "Back 2",
              flipped: false,
            },
          ],
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Parallax, Pagination, Navigation],
    };
  },
  mounted() {
    const ro = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const ancho = entry.contentRect.width;

        if (ancho < 500) {
          this.MaximoText = "400px";
          this.sectionheightFirst = "100vh";
          this.sectionheightSecond = "auto";
          this.complementWidth = ["90%", "90%", "90%"];
          this.complementHeight = "200px";
          this.cardHeight = "200px";
          this.cardwidth = "300px";
        } else {
          this.MaximoText = "80%";
          this.sectionheightFirst = "30%";
          this.sectionheightSecond = "70%";
          this.complementWidth = ["35%", "27.5%", "20%"];
          this.complementHeight = "90%";
          this.cardHeight = "340px";
          this.cardwidth = "550px";
        }
      }
    });

    ro.observe(this.$el.parentElement);
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.Fondo {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.5;
}
.IntroduccionSlide {
  justify-content: center;
}
.segundootexto {
  flex-direction: column;
}
.Complemento {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  background-color: #a8dadc;
  padding: 10px 10px;
  border-radius: 25px;
  margin: 5px;
}
.ImagenesProyectos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.Github {
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
}
.Github a {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: black;
  text-decoration: none;
}
.Github img {
  width: 50%;
  height: 75%;
}
.ComplementoCategoria div {
  width: 115px;
  height: 55px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #2e9dd0, #1d54ad);
  border-radius: 2rem;
}
.ContenidoDelSlide {
  height: 100%;
  overflow-y: auto;
  display: block; /* ← clave */
}
.ContenidoDelSlide section {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.ContenidoDelSlide section:nth-child(2) {
  width: 100%;
  background-color: #a8dadc;
  border-radius: 5px;
}
/* Para pantallas grandes */
.ContenidoDelSlide section:first-child .Complemento:nth-child(1),
.ContenidoDelSlide section:first-child .Complemento:nth-child(2) {
  width: 35%;
}

.ContenidoDelSlide section:first-child .Complemento:nth-child(3) {
  width: 20%;
}

.swiper-slide {
  flex-direction: column;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  color: #000000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
  text-align: center;
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}

.swiper-slide .title {
  font-size: 70px;
  font-weight: bold;
}

.swiper-slide .subtitle {
  font-size: 35px;
  margin: 5px;
}

.swiper-slide .text {
  font-size: 25px;
  line-height: 1.3;
}

/* From Uiverse.io by joe-watson-sbf */
.flip-card {
  background-color: transparent;
  perspective: 1000px;
  margin: 20px;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 1rem;
  padding: 10px;
}

.flip-card-front {
  background-color: #1d54ad;
  color: rgb(255, 255, 255);
}
.flip-card-front img {
  height: 100%;
  border-radius: 1rem;
}

.flip-card-back {
  background-color: #2e9dd0; /* azul medio */
  color: white;
  transform: rotateY(180deg);
}
.flip-card-back img {
  height: 100%;
  border-radius: 1rem;
}
.flip-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: coral;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
}

/* Reemplazar el hover */
.flip-card-inner.flipped {
  transform: rotateY(180deg);
}
</style>
