import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Offers from "../views/Offers.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Help from "../views/Help.vue";
import Post from "../views/Post.vue";
import Login from "../views/Login.vue";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../scss//main.scss";
import "normalize.css";



Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/offers",
        name: "Offers",
        component: Offers,
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/help",
        name: "Help",
        component: Help
    },

    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/post",
        name: "Post",
        component: Post,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;