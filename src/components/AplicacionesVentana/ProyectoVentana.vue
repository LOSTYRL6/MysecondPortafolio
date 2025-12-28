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
    <swiper-slide class="IntroduccionSlide">
      <img src="../../../project1.png" class="Fondo" alt="" />
      <div class="title" data-swiper-parallax="-300">Projecto Cientifiks</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div
        :style="{ maxWidth: MaximoText }"
        class="text"
        data-swiper-parallax="-100"
      >
        <p>
          Página web propuesta por un grupo de niños, quienes nos proporcionaron
          las directrices para el desarrollo de una plataforma interactiva. El
          proyecto incluye cuatro juegos, cuyos nombres y conceptos fueron
          definidos por los propios niños, fomentando así su participación
          activa en el diseño y contenido del sitio, contiene tambien una tabla
          de clasificacion
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class="ContenidoDelSlide">
      <section :style="{ height: sectionheightFirst }">
        <div
          class="Complemento"
          :style="{ width: complementWidth[0], height: complementHeight }"
        >
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScripts</div>
          <div>PHP</div>
        </div>
        <div
          class="Complemento"
          :style="{ width: complementWidth[1], height: complementHeight }"
        >
          <p>Segundo contenido</p>
        </div>
        <div
          class="Complemento"
          :style="{ width: complementWidth[2], height: complementHeight }"
        >
          <p>Tercer contenido</p>
        </div>
      </section>

      <section :style="{ height: sectionheightSecond }">
        <p>Contenido del segundo section</p>
      </section>
    </swiper-slide>
    <swiper-slide class="IntroduccionSlide">
      <img src="../../../project2.png" class="Fondo" alt="" />
      <div class="title" data-swiper-parallax="-300">TaskForge</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div
        :style="{ maxWidth: MaximoText }"
        class="text"
        data-swiper-parallax="-100"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class="ContenidoDelSlide">
      <section :style="{ height: sectionheightFirst }">
        <div
          class="Complemento"
          :style="{ width: complementWidth[0], height: complementHeight }"
        >
          <div>MySQL</div>
          <div>PHP</div>
          <div>Bootstrap</div>
        </div>
        <div
          class="Complemento"
          :style="{ width: complementWidth[1], height: complementHeight }"
        >
          <p>Segundo contenido</p>
        </div>
        <div
          class="Complemento"
          :style="{ width: complementWidth[2], height: complementHeight }"
        >
          <p>Tercer contenido</p>
        </div>
      </section>

      <section :style="{ height: sectionheightSecond }">
        <p>Contenido del segundo section</p>
      </section>
    </swiper-slide>
    <swiper-slide class="IntroduccionSlide">
      <img src="../../../project3.png" class="Fondo" alt="" />
      <div class="title" data-swiper-parallax="-300">Sing & Drink</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div
        :style="{ maxWidth: MaximoText }"
        class="text"
        data-swiper-parallax="-100"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class="ContenidoDelSlide">
      <section :style="{ height: sectionheightFirst }">
        <div
          class="Complemento"
          :style="{ width: complementWidth[0], height: complementHeight }"
        >
          <div>Vue</div>
          <div>Laravel</div>
          <div>Eloquent</div>
          <div>GSAP</div>
        </div>
        <div
          class="Complemento"
          :style="{ width: complementWidth[1], height: complementHeight }"
        >
          <p>Segundo contenido</p>
        </div>
        <div
          class="Complemento"
          :style="{ width: complementWidth[2], height: complementHeight }"
        >
          <p>Tercer contenido</p>
        </div>
      </section>
      <section :style="{ height: sectionheightSecond }">
        <p>Contenido del segundo section</p>
      </section>
    </swiper-slide>
    <swiper-slide class="IntroduccionSlide">
      <img src="../../../project4.png" class="Fondo" alt="" />
      <div class="title" data-swiper-parallax="-300">GGGamers</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div
        :style="{ maxWidth: MaximoText }"
        class="text"
        data-swiper-parallax="-100"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>

    <swiper-slide class="ContenidoDelSlide">
      <section :style="{ height: sectionheightFirst }">
        <div
          class="Complemento"
          :style="{ width: complementWidth[0], height: complementHeight }"
        >
          <div>Vue</div>
          <div>Laravel</div>
          <div>Vue</div>
          <div>Vue</div>
        </div>
        <div
          class="Complemento"
          :style="{ width: complementWidth[1], height: complementHeight }"
        >
          <p>Segundo contenido</p>
        </div>
        <div
          class="Complemento"
          :style="{ width: complementWidth[2], height: complementHeight }"
        >
          <p>Tercer contenido</p>
        </div>
      </section>
      <section :style="{ height: sectionheightSecond }">
        <p>Contenido del segundo section</p>
      </section>
    </swiper-slide>
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
      sectionheightFirst: "35%", // altura del primer section
      sectionheightSecond: "65%", // altura del segundo section
      sectionheight: "50%",
      complementWidth: ["35%", "35%", "20%"], // para los 3 divs
      complementHeight: "90%",
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
          this.sectionheightSecond = "100%";
          this.complementWidth = ["90%", "90%", "90%"];
          this.complementHeight = "200px";
        } else {
          this.MaximoText = "80%";
          this.sectionheightFirst = "35%";
          this.sectionheightSecond = "65%";
          this.complementWidth = ["35%", "35%", "20%"];
          this.complementHeight = "90%";
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
.Complemento {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  background-color: #a8dadc;
  padding: 10px 10px;
  border-radius: 25px;
}
.Complemento div {
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #457b9d;
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
  background-color: blue;
}
.IntroduccionSlide {
  padding: 35px 55px;
}
/* Para pantallas grandes */
.ContenidoDelSlide section:first-child .Complemento:nth-child(1),
.ContenidoDelSlide section:first-child .Complemento:nth-child(2) {
  width: 35%;
}

.ContenidoDelSlide section:first-child .Complemento:nth-child(3) {
  width: 20%;
}

/* Para pantallas pequeñas (<500px) */
@media (max-width: 500px) {
  .ContenidoDelSlide section:first-child .Complemento {
    width: 90% !important;
    margin: 0 auto; /* centramos la columna */
    margin-bottom: 10px; /* separación entre los divs */
  }
}

.swiper-slide {
  flex-direction: column;
  position: relative;
  font-size: 18px;
  color: #000000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
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
</style>
