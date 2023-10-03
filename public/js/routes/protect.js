import { verifyAutenticate } from "../services/authenticate.js";

import { defaultRoutePages } from "../config.js";

if (verifyAutenticate()) 
    window.location.href = defaultRoutePages;
