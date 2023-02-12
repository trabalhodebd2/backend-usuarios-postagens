import {
    signIn
} from "./services/authenticate/authenticate.js"

import { 
    defaultRoutePages
} from "./config.js"

const formLogin = document.querySelector("#login")
formLogin.addEventListener("submit", event => {
    event.preventDefault()

    signIn("Oi, eu sou um Token")

    const page = "login.html"
    window.location.href = defaultRoutePages + page
})