import { 
    defaultRoutePages,
} from "./config.js"

import {
    createUser
} from "./services/crud/user.js"

export const getValues = (elementForm) => {
    const elements = elementForm.querySelectorAll("input")
    let listValues = []
    
    for (const element of elements) {
        listValues.push(element.value)
    }
    
    return listValues
}

const formRegister = document.querySelector("#register")
formRegister.addEventListener("submit", async (event) => {
    event.preventDefault()

    const [ username, email, password ] = getValues(formRegister)

    const response = await createUser(username, email, password)
    
    if (response?.id) {
        const page = "login"
        window.location.href = defaultRoutePages + page
    } else {
        alert("Ocorreu um error ao registrar usuário")
    }
})