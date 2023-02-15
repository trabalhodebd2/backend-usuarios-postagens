import { 
    defaultRouteBackEnd
} from "../../config.js"

import {
    getUserId
} from "./user.js"


const getAllNotepads = async () => {
    const userId = await getUserId()
    console.log(userId)
    const grafos = `users/${userId}/posts`
    const urlApi = defaultRouteBackEnd + grafos

    try {
        const response = await fetch(urlApi)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const createNotepad = async (title, content) => {
    const userId = await getUserId()
    const grafos = `users/${userId}/posts`
    const urlApi = defaultRouteBackEnd + grafos

    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({ title, content })
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
    const grafos = `users/${userId}/posts`
    const urlApi = defaultRouteBackEnd + grafos

    const config = {
		method: "PATCH",
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
    const grafos = `users/${userId}/posts`
    const urlApi = defaultRouteBackEnd + grafos

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
    const grafos = `users/${userId}/posts`
    const urlApi = defaultRouteBackEnd + grafos
    
    try {
        const response = await fetch(`${urlApi}?query=${query}`)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export { getAllNotepads, createNotepad, updateNotepad, deleteNotepad, searchNotepads }