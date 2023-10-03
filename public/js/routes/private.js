import { 
    verifyAutenticate 
} from "../services/authenticate.js"

import { 
    defaultRoutePages
} from "../config.js"

const page = "login"

if (!verifyAutenticate())
    window.location.href = defaultRoutePages + page