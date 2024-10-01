import CustomStorageService from "@services/custom-storage/custom-storate.service"
import NotificationService from "@services/notification/notification.service"


class AuthService {

    static async login(credentials: { email: string, password: string}){
        const response = await fetch("http://localhost:3000/api/users/login")
        const jsResponse = await response.json()

        if ("token" in jsResponse){
            CustomStorageService.addItem("token", jsResponse.token)
        } else {
            NotificationService.notify({ classNames: 'negative', content: 'Échec de la connexion' })
        }


    }
}

export default AuthService