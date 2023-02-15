import {
    signIn
} from "./services/authenticate/authenticate.js"

import { 
    defaultRoutePages,
    defaultRouteBackEnd
} from "./config.js"

const formLogin = document.querySelector("#login")
formLogin.addEventListener("submit", async event => {
    event.preventDefault()

    try {
        const response = await fetch(`${defaultRouteBackEnd}/login`)
        const token = await response.refresh
        signIn(token)

        const page = "index.html"
        window.location.href = defaultRoutePages + page
    } catch(e) {
        alert("Ocorreu um error ao fazer login")
        console.error(e)
    }
})