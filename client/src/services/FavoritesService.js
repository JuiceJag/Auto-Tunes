import { AppState } from "../AppState.js"
import { Favorite } from "../models/Favorite.js"
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
        const newFavs = res.data.map((favs) => new Favorite(favs))
        AppState.favorite = newFavs
        logger.log(AppState.favorite)
    }
}

export const favoritesService = new FavoritesService()