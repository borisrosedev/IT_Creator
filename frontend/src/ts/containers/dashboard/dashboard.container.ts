import BaseContainer from "@core/BaseContainer";
import { OnNavigate } from "@custom-types/on-navigate.type";
import secure from "@decorators/secure.decorator";

@secure
class DashboardContainer extends BaseContainer {
    constructor(onNavigate: OnNavigate){
        super(onNavigate)
    }
}

export default DashboardContainer