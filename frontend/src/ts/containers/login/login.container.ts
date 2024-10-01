import BaseContainer from "@core/BaseContainer";
import { OnNavigate } from "@custom-types/on-navigate.type";


class LoginContainer extends BaseContainer {
    constructor(onNavigate: OnNavigate){
        super(onNavigate)
    }
}