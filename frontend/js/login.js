import {
    signIn
} from "./services/authenticate/authenticate.js"

import { 
    defaultRoutePages,
    defaultRouteBackEnd
} from "./config.js"

export const getValues = (elementForm) => {
    const elements = elementForm.querySelectorAll("input")
    let listValues = []
    
    for (const element of elements) {
        listValues.push(element.value)
    }
    
    return listValues
}

const formLogin = document.querySelector("#login")
formLogin.addEventListener("submit", async event => {
    event.preventDefault()

    const [ email, password ] = getValues(formLogin)

    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({ email, password })
	};

    try {
        await fetch(`${defaultRouteBackEnd}login`, config)

        const page = "index.html"
        window.location.href = defaultRoutePages + page
    } catch(e) {
        alert("Ocorreu um error ao fazer login")
        console.error(e)
    }
})