import { defaultRoutePages, defaultRouteBackEnd } from "./config.js";

import { signIn } from "./services/authenticate.js";

export const getValues = (elementForm) => {
    const elements = elementForm.querySelectorAll("input");
    let listValues = [];

    for (const element of elements) {
        listValues.push(element.value);
    }

    return listValues;
};

const formLogin = document.querySelector("#login");
formLogin.addEventListener("submit", async (event) => {
    event.preventDefault();

    const [email, password] = getValues(formLogin);

    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    };

    const route = "login";
    const urlApi = defaultRouteBackEnd + route;

    try {
        const response = await fetch(urlApi, config);
        const content = await response.json();
        signIn(content.userId);

        if (response.status == 200) {
            window.location.href = defaultRoutePages;
        }
    } catch (err) {
        alert("Ocorreu um error ao fazer login");
        console.error(err);
    }
});
