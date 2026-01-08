<template>
  <div
    class="Ventana"
    :class="{ maximizado: estaMaximizado }"
    :style="{ top: posY + 'px', left: posX + 'px', zIndex: zIndex }"
    v-show="!minimizado"
  >
    <div class="BarraTitulo" @mousedown="iniciarDrag">
      <div class="tituloYfoto">
        <img :src="img" alt="" />
        <p>{{ titulo }}</p>
      </div>
      <div class="Botones">
        <button @click="$emit('toggle', id)">
          <img src="/_.png" alt="" />
        </button>
        <button @click="maximizar"><img src="/🗖.png" alt="" /></button>
        <button @click="$emit('cerrar', id)">
          <img src="/x.png" alt="" />
        </button>
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
    img: String,
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
  width: 500px;
  height: 350px;
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
  cursor: move;
  user-select: none;

  color: #1b3557;
  font-weight: bold;
}
.tituloYfoto {
  height: 100%;
  margin-top: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: row;
}

.BarraTitulo .Botones button {
  border: none;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  padding: 0 8px;
  border: 1px solid rgba(0, 0, 0, 0.6666666667);
  justify-content: center;
  align-items: center;
  display: flex;
}
.BarraTitulo p {
  margin-left: 5px;
  margin-top: 5px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.841),
    0 0 10px rgba(255, 255, 255, 0.736), 0 0 20px rgba(255, 255, 255, 0.6);
}

.BarraTitulo .Botones button:nth-child(1) {
  background: linear-gradient(#fafafa55, #dcdcdc5c);
  border-bottom-left-radius: 5px;
}
.BarraTitulo .Botones button:nth-child(1):hover {
  background: radial-gradient(circle at bottom, #0bfdfa, transparent 65%),
    linear-gradient(#86a7bc 50%, #0f3c6d 0);
  -webkit-box-shadow: 0 0 7px 3px #5dc4f0,
    inset 0 0 0 1px hsla(0, 0%, 100%, 0.4666666667);
  box-shadow: 0 0 7px 3px #5dc4f0,
    inset 0 0 0 1px hsla(0, 0%, 100%, 0.4666666667);
}

.BarraTitulo .Botones button:nth-child(2) {
  background: linear-gradient(#fafafa55, #dcdcdc5c);
}
.BarraTitulo .Botones button:nth-child(2):hover {
  background: radial-gradient(circle at bottom, #0bfdfa, transparent 65%),
    linear-gradient(#86a7bc 50%, #0f3c6d 0);
  -webkit-box-shadow: 0 0 7px 3px #5dc4f0,
    inset 0 0 0 1px hsla(0, 0%, 100%, 0.4666666667);
  box-shadow: 0 0 7px 3px #5dc4f0,
    inset 0 0 0 1px hsla(0, 0%, 100%, 0.4666666667);
}

.BarraTitulo .Botones button:nth-child(3) {
  width: 50px;
  background-color: #d54f36;
  color: white;
  border-bottom-right-radius: 5px;
}
.BarraTitulo .Botones button:nth-child(3):hover {
  background: radial-gradient(
      circle at 50% 140%,
      rgba(255, 120, 120, 0.6),
      transparent 60%
    ),
    radial-gradient(
      circle at -40% 50%,
      rgba(255, 100, 100, 0.45),
      transparent 55%
    ),
    radial-gradient(
      circle at 140% 50%,
      rgba(255, 100, 100, 0.35),
      transparent 55%
    ),
    linear-gradient(to bottom, #f3c1b8 0%, #d96b5c 45%, #b1342a 100%);

  box-shadow: 0 0 7px 3px rgba(230, 120, 120, 0.65),
    inset 0 0 0 1px rgba(255, 255, 255, 0.45);

  color: white;
}
.Botones img {
  width: 17px;
  height: 17px;
}

.Contenido {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fffffff2;
  overflow: auto;
  align-items: center;
  margin: 7px;
  border-radius: 5px;
}
.Botones {
  height: 80%;
  display: flex;
  flex-direction: row;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
}
</style>
