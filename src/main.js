import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Aplicaciones from "./components/Aplicaciones.vue";
import Ventana from "./components/Ventana.vue";

import ChromeVentana from "./components/AplicacionesVentana/ChromeVentana.vue";
import CurriculumVentana from "./components/AplicacionesVentana/CurriculumVentana.vue";
import OpcionesVentana from "./components/AplicacionesVentana/OpcionesVentana.vue";
import ConocimientosVentana from "./components/AplicacionesVentana/ConocimientosVentana.vue";
import EstudiosVentana from "./components/AplicacionesVentana/EstudiosVentana.vue";
import ExperienciasVentana from "./components/AplicacionesVentana/ExperienciasVentana.vue";
import ProyectoVentana from "./components/AplicacionesVentana/ProyectoVentana.vue";
const app = createApp(App);

// Registras el componente
app.component("Aplicaciones", Aplicaciones);
app.component("Ventana", Ventana);
app.component("ChromeVentana", ChromeVentana);
app.component("CurriculumVentana", CurriculumVentana);
app.component("OpcionesVentana", OpcionesVentana);
app.component("ConocimientosVentana", ConocimientosVentana);
app.component("EstudiosVentana", EstudiosVentana);
app.component("ExperienciasVentana", ExperienciasVentana);
app.component("ProyectoVentana", ProyectoVentana);

app.mount("#app");
