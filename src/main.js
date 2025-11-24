import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Aplicaciones from "./components/Aplicaciones.vue";
import Ventana from "./components/Ventana.vue";

const app = createApp(App);

// Registras el componente
app.component("Aplicaciones", Aplicaciones);
app.component("Ventana", Ventana);

app.mount("#app");
