<template>
  <div class="contenedorDeImagen">
    <img
      :style="{ width: logoWidth, height: logoheight }"
      src="../../../public/Google_2015_logo.svg.png"
      alt=""
    />
  </div>
  <div class="gcse-container">
    <div class="gcse-search"></div>
  </div>

  <div
    class="Suerte"
    :style="{ width: botonWidth, height: botonHeight, fontSize: botonFontSize }"
    @click="voyASuerte"
  >
    <p>Voy a tener suerte</p>
  </div>
</template>

<script>
export default {
  name: "ChromeVentana",
  data() {
    return {
      anchoVentana: 0,
      logoheight: "150px",
      logoWidth: "40%",
      botonWidth: "25%",
      botonHeight: "25px",
      botonFontSize: "14px",
    };
  },
  mounted() {
    // Google Search Script
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=f2ddbab2d0ada4a11";
    script.async = true;
    document.body.appendChild(script);

    // ResizeObserver
    const ro = new ResizeObserver((entries) => {
      for (let entry of entries) {
        this.anchoVentana = entry.contentRect.width;

        // Ajustar el logo
        if (this.anchoVentana < 300) {
          this.logoWidth = "60%";
          this.logoheight = "100px";
          this.botonWidth = "80%";
          this.botonHeight = "35px";
          this.botonFontSize = "12px";
        } else {
          this.logoWidth = "40%";
          this.logoheight = "150px";
          this.botonWidth = "25%";
          this.botonHeight = "25px";
          this.botonFontSize = "14px";
        }
      }
    });

    // Observamos el contenedor de la ventana
    ro.observe(this.$el.parentElement);
  },
  methods: {
    voyASuerte() {
      window.open("https://www.rickroll.it/rickroll.mp4", "_blank");
    },
  },
};
</script>

<style scoped>
.contenedorDeImagen {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.gcse-container {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-top: 25px;
  width: 90%;
}
.Suerte {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  margin-top: 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
}
.Suerte:hover {
  background-color: darkgray;
}
</style>
