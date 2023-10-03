export const signIn = (userId) => localStorage.setItem("userId", userId)

export const signOut = () => localStorage.removeItem("userId")

export const getUserId = () => localStorage.getItem("userId")

export const verifyAutenticate = () => Boolean(getUserId())