/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single scss file (app.scss in this case)
import "./styles/app.scss";

// start the Stimulus application
import "./bootstrap";

require("bootstrap");

import App from "./vue/App.vue";
import router from "./vue/router/index.js";
import { createApp } from 'vue'

// Make sure to _use_ the router instance to make the
// whole app router-aware.
createApp(App).use(router).mount('#vue-app')