<template>
  <div class="contenedor">
    <Swiper
      direction="vertical"
      :slides-per-view="1"
      :space-between="30"
      :mousewheel="true"
      :pagination="{ clickable: true }"
      :modules="modules"
      class="mySwiper"
      @slideChange="animarSlide"
      ref="swiperRef"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="imagne" :ref="(el) => (imagenRefs[index] = el)">
          <h2 :style="{ fontSize: textSize }">{{ slide.titulo }}</h2>
          <img :src="slide.img" alt="" />
          <p>{{ slide.date }}</p>
        </div>
        <div class="contenido">
          <section>
            <h1 :style="{ fontSize: tittleSize }">
              {{ slide.Especificaciones }}
            </h1>
          </section>
          <section>
            <div
              v-for="(DescripcionDelDescripcion, a) in slide.Descripciones"
              :key="a"
            >
              <p :style="{ fontSize: descriptionSize }">
                {{ DescripcionDelDescripcion }}
              </p>
            </div>
          </section>
          <section>
            <div>Hola</div>
            <div>Hola</div>
            <div>Hola</div>
            <div>Hola</div>
            <div>Hola</div>
            <div>Hola</div>
            <div>Hoasdasdla</div>
            <div>Hola</div>
            <div>Hola</div>
            <div>Holwqdas</div>
            <div>Hoasdasla</div>
            <div>Hola</div>
            <div>Hola</div>
          </section>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = [
      {
        titulo: "Sagrada Familia Palomar",
        img: "./safa.png",
        date: "2021 - 2023",
        Especificaciones: "Cientifics - Social",
        Descripciones: [
          "~ Estudios en ciencias y humanidades",
          "~ Trabajo en equipo y proyectos escolares",
          "~ Desarrollo de pensamiento crítico y habilidades analíticas",
        ],
      },
      {
        titulo: "Centre Estudis Politecnics",
        img: "./politec.png",
        date: "2023 - 2025",
        Especificaciones: "Desarrollo de aplicacion Web (DAW)",
        Descripciones: [
          "~ Desarollar Paginas web con frameWork",
          "~ Gestión de bases de datos MySQL",
          "~ Aprendizaje basado en proyectos (Project-Based Learning)",
          "~ Control de versiones con Git",
        ],
        Aprendido: [
          "HTML",
          "Css",
          "JavaScripts",
          "Java",
          "Bootstrap",
          "VUE",
          "PHP",
          "Eloquent",
          "Laravel",
          "MySql",
        ],
      },
      {
        titulo: "Indian webs",
        img: "./indians.png",
        date: "2025(febrero) - 2025(julio)",
        Especificaciones: "Prácticas en desarrollo web",
        Descripciones: [
          "~ Mantenimiento y actualización de sitios web",
          "~ WordPress y desarrollo de plugins con React",
          "~ Optimización SEO y rendimiento web",
        ],
      },
    ];

    const modules = [Mousewheel, Pagination];
    const imagenRefs = ref([]);
    const swiperRef = ref(null);
    const textSize = ref("30px");
    const tittleSize = ref("40px");
    const descriptionSize = ref("20px");

    const animarSlide = (swiper) => {
      const index = swiper.activeIndex ?? swiper;
      const el = imagenRefs.value[index];
      if (!el) return;

      gsap.from(el, { opacity: 0, x: -50 });
      gsap.from(el.querySelector("h2"), { opacity: 0.5, x: -40, duration: 1 });
      gsap.from(el.querySelector("img"), {
        opacity: 0.5,
        y: -40,
        duration: 1.5,
      });
    };

    onMounted(() => {
      // Animar primer slide
      nextTick(() => animarSlide(0));

      // ResizeObserver para cambiar tamaño de texto
      const ro = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const width = entry.contentRect.width;
          textSize.value = width < 500 ? "20px" : "30px";
          tittleSize.value = width < 500 ? "20px" : "40px";
          descriptionSize.value = width < 500 ? "15px" : "20px";
        }
      });

      // Observar el contenedor
      const contenedor = document.querySelector(".contenedor");
      if (contenedor) ro.observe(contenedor);
    });

    return {
      slides,
      modules,
      imagenRefs,
      swiperRef,
      animarSlide,
      textSize,
      tittleSize,
      descriptionSize,
    };
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

.contenedor {
  width: 100%;
  height: 100%;
}

.mySwiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  background: #ffffff;
}

.imagne {
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.contenido {
  width: 63%;
  height: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #a8dadc;
  color: rgb(0, 0, 0);
  border-radius: 25px;
}
.contenido section {
  width: 90%;
  display: flex;
  flex-direction: column;
}
.contenido section:nth-child(1) {
  height: 23%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.contenido section:nth-child(2) {
  justify-content: space-around;
  height: 44%;
}
.contenido section:nth-child(2) div {
  width: 90%;
  height: auto;
  margin-left: 10px;
}
.contenido section:nth-child(3) {
  height: 27%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
}
.contenido section:nth-child(3) div {
  width: auto;
  height: auto;
  background-color: #457b9d;
  border-radius: 10px;
  display: flex;
  margin: 5px;
  padding: 3px;
}

.imagne img {
  width: 50%;
  height: 50%;
  margin: 15px;
}
</style>
