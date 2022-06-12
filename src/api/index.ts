import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

export const client = (() => axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8;',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
    },
}))()

export class Api {
    private client: AxiosInstance

    constructor() {
        this.client = client
    }

    public request = <T>(options: AxiosRequestConfig) => this.client(options)
        .then<T>(({ data }) => data as T)
        .catch(e => Promise.reject(e))
}

export default new Api()
