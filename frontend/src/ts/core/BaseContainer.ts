import { OnNavigate } from "@custom-types/on-navigate.type";


class BaseContainer {
    onNavigate: OnNavigate 
    constructor(onNavigate: OnNavigate){
        this.onNavigate = onNavigate
    }
}

export default BaseContainer