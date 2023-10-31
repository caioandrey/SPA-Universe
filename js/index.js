import * as events from './events.js'

events.changeBG()
events.homeColorChange()
events.universeColorChange()
events.explorationColorChange()



import { Router } from './actions.js'


const router = new Router()
router.add('/', "/pages/home.html")
router.add("/universe.html", "/pages/universe.html")
router.add("/exploration.html", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

