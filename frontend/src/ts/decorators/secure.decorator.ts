import CustomStorageService from "@services/custom-storage/custom-storate.service";

function secure(constructor: Function) {
    if(!CustomStorageService.getSpecificItem("token")) {
        window.location.hash = ""
        console.log("⛔️ Restricted Access")
    } 
}

export default secure