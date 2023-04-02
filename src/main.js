import { createApp } from "vue";
import App from "./App.vue";
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
library.add(faTwitter);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
