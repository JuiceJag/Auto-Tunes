import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"

class FavoritesService {
    async favoriteCar(carId) {
        const favData = {}
        favData.carId = carId
        const favorite = await api.post('api/favorites', favData)
        Pop.toast(`You have favorited this car!`)
    }

    async getFavoritesByAccountId(){
        const res = await api.get(`api/favorites`)
        logger.log( 'My favorites',res.data)
    }
}

export const favoritesService = new FavoritesService()