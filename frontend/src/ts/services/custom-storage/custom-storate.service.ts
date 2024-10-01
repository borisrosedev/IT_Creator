

class CustomStorageService {

    static getSpecificItem(key: string) {
        const item = localStorage.getItem(key)
        if(item){
            return JSON.parse(item)
        } else {
            return null
        }
    }

    static updateSpecificItem(key: string, value: any) {
        const item = localStorage.getItem(key)
        if(!item){
            localStorage.setItem(key, JSON.stringify(value))
            return "item created"
        } else {
            const jsItem = JSON.parse(item)
            localStorage.setItem(key, JSON.stringify({ ...jsItem, value}))
            return "item updated"
        }
    }

    static addItem(key: string, value: any){
        localStorage.setItem(key, JSON.stringify(value))
        return "item created"
    }

    static removeSpecitifItem(key: string){
        localStorage.removeItem(key)
        return "item removed"
    }


}

export default CustomStorageService