import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/portafolio', component: Home },
  { path: '/portafolio/aboutMe', component: AboutMe },
  { path: '/portafolio/projects', component: Projects },
  { path: '/portafolio/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
