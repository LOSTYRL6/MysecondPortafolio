import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Aplicaciones from "./components/Aplicaciones.vue";
import Ventana from "./components/Ventana.vue";

import ChromeVentana from "./components/AplicacionesVentana/ChromeVentana.vue";
import CurriculumVentana from "./components/AplicacionesVentana/CurriculumVentana.vue";
import OpcionesVentana from "./components/AplicacionesVentana/OpcionesVentana.vue";

const app = createApp(App);

// Registras el componente
app.component("Aplicaciones", Aplicaciones);
app.component("Ventana", Ventana);
app.component("ChromeVentana", ChromeVentana);
app.component("CurriculumVentana", CurriculumVentana);
app.component("OpcionesVentana", OpcionesVentana);

app.mount("#app");
