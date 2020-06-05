import { get } from 'lodash'

const getArr = (obj, ltr) => get(obj, ltr) || []

const getAccessToken = () => {
    const storedUser = localStorage.getItem('user')
    if (!storedUser) return null

    const user = JSON.parse(storedUser)
    return user.token
}

export {
    getArr, getAccessToken
}