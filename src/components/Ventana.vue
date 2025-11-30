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
      posX: 100,
      posY: 100,
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
          let nuevaX = e.clientX - this.offsetX;
          let nuevaY = e.clientY - this.offsetY;

          const maxX = window.innerWidth - this.$el.offsetWidth - 10;
          const maxY = window.innerHeight - this.$el.offsetHeight - 47.5;
          this.posX = Math.min(Math.max(nuevaX, 0), maxX);
          this.posY = Math.min(Math.max(nuevaY, 0), maxY);

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
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.25s ease;

  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.399) 0%,
    rgba(240, 248, 255, 0.468) 40%,
    rgba(225, 235, 250, 0.232) 100%
  );

  border: 1px solid rgba(180, 190, 210, 0.9);
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.45),
    inset 0 1px 2px rgba(255, 255, 255, 0.9);
}

.Ventana.maximizado {
  width: 100%;
  height: 100%;
  border-radius: 0;
}

.BarraTitulo {
  height: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
  cursor: move;
  user-select: none;

  background: linear-gradient(to bottom, #e3eefc 0%, #c2d7f3 45%, #9ebde4 100%);

  color: #1b3557;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.75);
}

.BarraTitulo .Botones button {
  border: none;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  border-radius: 3px;
  padding: 0 8px;
}

.BarraTitulo .Botones button:nth-child(1) {
  background: linear-gradient(#fafafa, #dcdcdc);
}

.BarraTitulo .Botones button:nth-child(2) {
  background: linear-gradient(#fafafa, #dcdcdc);
}

.BarraTitulo .Botones button:nth-child(3) {
  background: linear-gradient(#ff7a7a, #dd3c3c);
  color: white;
}

.Contenido {
  flex: 1;
  padding: 6px;
  display: flex;
  flex-direction: column;
  background: #fffffff2;
  overflow: auto;
  align-items: center;
  margin: 7px;
  border-radius: 5px;
}
.Botones button {
  margin: 0.5px;
}
.Botones button:nth-child(3) {
  width: 50px;
}
</style>
