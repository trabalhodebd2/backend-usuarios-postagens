import lastNotepad from "../controller/lastNotepad.js"
import reqType from "../controller/reqType.js"

import {
    createNotepad,
    updateNotepad
} from "./crud/notepad.js"

import modalController, {
    getTitleAndContentModal
} from "./modals/modalController.js"

import createElementNotepad from "./createElementNotepad.js"
import remapEvents from "./remapEvents.js"

import { idEdit } from "./getIdModals.js"

const controllerEdit = async (title, body) => {
    lastNotepad.setTitleAndContent(title, body)
    await updateNotepad(lastNotepad.getId(), {title, body})
}

const controllerCreate = async (title, body) => {
    const notepad = await createNotepad(title, body)

    const elementContent = createElementNotepad(
        notepad.id, notepad.title, notepad.body
    )

    remapEvents()
    
    const parser = new DOMParser()
    lastNotepad.set(parser.parseFromString(elementContent, "text/html"))
}

const controllFormCreateOrEdit = async () => {
    const { title, content } = getTitleAndContentModal()

    modalController(idEdit)
    
    if (reqType.get() === "PATCH") 
        controllerEdit(title, content)
    else if (reqType.get() === "POST") 
        controllerCreate(title, content)
}

export default controllFormCreateOrEdit