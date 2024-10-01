import BaseContainer from "@core/BaseContainer";
import { OnNavigate } from "@custom-types/on-navigate.type";

class HomeContainer extends BaseContainer {
    constructor(onNavigate: OnNavigate){
        super(onNavigate)
    }
}

export default HomeContainer