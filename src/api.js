import {restUrl} from './constants'

const request = async (method, url, data) => {

    let params = {};
    if ( ['POST', 'PUT', 'PATCH'].includes(method) ) {
        if (data) {
            params.body = JSON.stringify(data)
        }
    }

    const res = await fetch(
        restUrl + url, 
        {
            headers: {
                "Content-Type": "application/json",
            },
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
export {postApi, patchApi}
