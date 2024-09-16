import axios from 'axios'
import credentials from '../credentials'

class CountriesService{
    api_url = 'https://www.universal-tutorial.com/api'

    async getToken(){
        try{
            const response = await axios({
                url: `${this.api_url}/getaccesstoken`,
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    "api-token": credentials.countriesApiToken,
                    "user-email": credentials.countriesApiMail
                }
            })
            return response.data.auth_token
        }
        catch(error){
            console.error(error)
        }
    }

    async getCountries(){
        const token = await this.getToken()
        try{
            const response = await axios({
                url: `${this.api_url}/countries/`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            return response.data
        }
        catch(error){
            console.error(error)
        }
    }

    async getStates(country){
        const token = await this.getToken()
        try{
            const response = await axios({
                url: `${this.api_url}/states/${country}`,
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data
        }
        catch(error){
            console.error(error)
        }
    }


}

export const countriesService = new CountriesService()