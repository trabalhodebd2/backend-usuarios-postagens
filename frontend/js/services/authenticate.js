export const signIn = (userId) => localStorage.setItem("token", userId)

export const signOut = () => localStorage.removeItem("token")

export const getToken = () => localStorage.getItem("token")

export const verifyAutenticate = () => Boolean(getToken())