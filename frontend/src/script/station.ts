import type {StationStatus as Station_status} from "./station_status";
import {StationStatus} from "./station_status";
import type Pos from "./pos";
import {Pos0} from "./pos";
import type StationIcon from "./station_icon";
import {EmptyIcon} from "./station_icon"

import Logo from "../assets/fsgicon.png"


export interface StationInterface {
    name: string
    status: Station_status
    position: Pos
}

export class Station implements StationInterface{
    static icon_open: StationIcon = {ico:Logo, height:192, width:192} //TODO: Change Icons to real once not the logo
    static icon_done: StationIcon = {ico:Logo, height:192, width:192}
    static icon_todo: StationIcon = {ico:Logo, height:192, width:192}

    name: string
    status: Station_status
    position: Pos
    constructor(name: string, pos?: Pos, stat?: Station_status) {
        this.name = name
        this.status = stat === undefined ? StationStatus.invisible : stat
        this.position = pos === undefined ? Pos0 : pos
    }
    getIcon(): StationIcon {
        switch (this.status) {
            case StationStatus.invisible:
                return EmptyIcon
            case StationStatus.open:
                return Station.icon_open
            case StationStatus.done:
                return Station.icon_done
            case StationStatus.todo:
                return Station.icon_todo
            default:
                console.error("Unreachable: Unknown Station Status:" + this.status)
        }
    }
}
export default Station;