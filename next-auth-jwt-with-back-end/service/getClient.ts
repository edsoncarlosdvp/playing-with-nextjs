import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: any) {

    const { 'appnextauth.token' : token } = parseCookies(ctx)

    const api = axios.create({
        baseURL: 'http://localhost:3333/api',
    })

    api.interceptors.request.use(config => {
    //console.log(config)

        return Promise.resolve(config)
    })

    if(token){
        api.defaults.headers['Authorization'] = `Bearer ${token}`
    }

    return api
}