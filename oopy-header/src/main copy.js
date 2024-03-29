import './app.css'
import App from './App.svelte'
import QuickMenu from './lib/QuickMenu.svelte'
import Footer from './lib/Footer.svelte'

const qm = new QuickMenu({
  target: document.getElementById('quick-menu'),
})

const footer = new Footer({
  target: document.getElementById('footer'),
})

const app = new App({
  target: document.getElementById('app'),
})

export default {app, qm,footer}