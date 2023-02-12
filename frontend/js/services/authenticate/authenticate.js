export const signIn = (token) => localStorage.setItem("token", token)

export const signOut = () => localStorage.removeItem("token")

export const getToken = () => localStorage.getItem("token")