<template>
  <div
    class="Ventana"
    :class="{ maximizado: estaMaximizado }"
    :style="{ top: posY + 'px', left: posX + 'px', zIndex: zIndex }"
    v-show="!minimizado"
  >
    <div class="BarraTitulo" @mousedown="iniciarDrag">
      <p>{{ titulo }}</p>
      <div class="Botones">
        <button @click="$emit('toggle', id)">_</button>
        <button @click="maximizar">🗖</button>
        <button @click="$emit('cerrar', id)">X</button>
      </div>
    </div>

    <div class="Contenido" v-show="!minimizado">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: String,
    id: String,
    minimizado: Boolean,
  },
  data() {
    return {
      estaMaximizado: false,
      prevX: 0,
      prevY: 0,
      posX: 50,
      posY: 50,
      offsetX: 0,
      offsetY: 0,
      arrastrando: false,
      zIndex: 1,
      raf: null,
    };
  },
  methods: {
    maximizar() {
      if (!this.estaMaximizado) {
        this.prevX = this.posX;
        this.prevY = this.posY;
        this.posX = 0;
        this.posY = 0;
        this.estaMaximizado = true;
      } else {
        this.posX = this.prevX;
        this.posY = this.prevY;
        this.estaMaximizado = false;
      }
    },

    iniciarDrag(e) {
      this.arrastrando = true;
      this.offsetX = e.clientX - this.posX;
      this.offsetY = e.clientY - this.posY;

      document.addEventListener("mousemove", this.arrastrar);
      document.addEventListener("mouseup", this.finDrag);

      this.zIndex = Date.now();
    },

    arrastrar(e) {
      if (!this.arrastrando || this.estaMaximizado) return;

      if (!this.raf) {
        this.raf = requestAnimationFrame(() => {
          this.posX = e.clientX - this.offsetX;
          this.posY = e.clientY - this.offsetY;
          this.raf = null;
        });
      }
    },

    finDrag() {
      this.arrastrando = false;
      document.removeEventListener("mousemove", this.arrastrar);
      document.removeEventListener("mouseup", this.finDrag);
    },
  },
};
</script>

<style scoped>
.Ventana {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 300px;
  height: 200px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border-radius: 20px;
}

.Ventana.maximizado {
  width: 100%;
  height: 100%;
  position: absolute;
}

.BarraTitulo {
  background: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  cursor: move;
  user-select: none; /* evita seleccionar texto al arrastrar */
  border-radius: 20px 20px;
}

.BarraTitulo .Botones button {
  background: transparent;
  border: none;
  color: white;
  margin-left: 5px;
  cursor: pointer;
}

.Contenido {
  flex: 1;
  padding: 10px;
}
</style>
