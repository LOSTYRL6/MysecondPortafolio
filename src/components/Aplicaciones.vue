<template>
  <div class="Aplicaciones">
    <img :src="imagenes" alt="" />
    <p>{{ Nombre }}</p>
  </div>
</template>

<script>
export default {
  props: {
    Nombre: String,
    id: String,
    imagenes: String,
  },
};
</script>

<style scoped>
.Aplicaciones {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 70px;
  height: 70px;
  margin: 10px;
}
p {
  color: white;
}
.Aplicaciones img {
  width: 80%;
  height: 80%;
}
</style>
