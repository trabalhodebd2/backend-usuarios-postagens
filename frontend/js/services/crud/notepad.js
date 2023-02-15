import { 
    defaultRouteBackEnd
} from "../../config.js"

// import {
//     getUserId
// } from "./user.js"

import {
    getUserId
} from "../authenticate.js"

const getAllNotepads = async () => {
    const userId = await getUserId()
    const router = `users/${userId}/posts`
    const urlApi = defaultRouteBackEnd + router

    try {
        const response = await fetch(urlApi)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const createNotepad = async (title, body) => {
    const userId = await getUserId()
    const router = `users/${userId}/posts`
    const urlApi = defaultRouteBackEnd + router

    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({ title, body })
	};

    try {
        const response = await fetch(urlApi, config)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const updateNotepad = async (id, update) => {
    const userId = await getUserId()
    const router = `users/${userId}/posts`
    const urlApi = defaultRouteBackEnd + router

    const config = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify(update)
	};

    try {
        const response = await fetch(`${urlApi}/${id}`, config)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const deleteNotepad = async (id) => {
    const userId = await getUserId()
    const router = `users/${userId}/posts`
    const urlApi = defaultRouteBackEnd + router

    const config = { method: "DELETE" }
    try {
        const response = await fetch(`${urlApi}/${id}`, config)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const searchNotepads = async (query) => {
    const userId = await getUserId()
    const router = `users/${userId}/posts`
    const urlApi = defaultRouteBackEnd + router
    
    try {
        const response = await fetch(`${urlApi}?query=${query}`)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export { getAllNotepads, createNotepad, updateNotepad, deleteNotepad, searchNotepads }