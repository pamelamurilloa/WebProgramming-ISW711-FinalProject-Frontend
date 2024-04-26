import {restUrl} from './constants'

const request = async (method, url, data) => {

    let params = {};
    if ( ['POST', 'PUT', 'PATCH'].includes(method) ) {
        if (data) {
            params.body = JSON.stringify(data)
        }
    }

    const headers = {"Content-Type": "application/json"}
    const user = localStorage.getItem('user')
    if (user) {
        const {token} = JSON.parse(user)
        headers.Authorization = `Bearer ${token}`
    }
    

    const res = await fetch(
        restUrl + url, 
        {
            headers,
            method,
            ...params
        }
    )

    if (300 > res.status && res.status >= 200) {
        return res.json()
    }

    console.log(res)
    throw new Error('Error sending request')
}

const postApi = (...params) => request('POST', ...params)
const patchApi = (...params) => request('PATCH', ...params)
const deleteApi = (...params) => request('DELETE', ...params)
const getApi = (...params) => request('GET', ...params)

export {
    postApi, 
    patchApi, 
    deleteApi, 
    getApi
}
