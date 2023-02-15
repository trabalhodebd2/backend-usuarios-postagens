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

const formRegister = document.querySelector("#register")
formRegister.addEventListener("submit", async event => {
    event.preventDefault()

    const [ name, email, password ] = getValues(formRegister)
    const route = "register"
    const urlApi = defaultRouteBackEnd + route

    const options = {
        method: "POST",
        body: JSON.stringify({ name, email, password })
    }

    try {
        const response = await fetch(urlApi)
        
        if (response.status === 201) {
            const page = "login.html"
            window.location.href = defaultRoutePages + page
        }
    } catch(e) {
        alert("Ocorreu um error ao registrar usuário")
        console.error(e)
    }
})