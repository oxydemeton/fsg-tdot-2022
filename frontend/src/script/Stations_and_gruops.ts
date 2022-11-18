import type {Station} from "./Station"

const group_count = 8

//Stations all Groups start with
const default_status = -1
const beginning_stations: Station[] = [
    {
        name: "Mensa",
        pos: {x: 10, y: 70},
        solution: "",
        status: 0
    }
]

//Stations all groups end with
const ending_stations: Station[]  = [
    {
        name: "Sporthalle",
        pos: {x: 90, y: 60},
        solution: "",
        status: default_status
    }
]

//Regular Stations wich are split up between the groups
const general_stations: Station[]  = [
    {
        name: "Gesellschaftswissenschaften",
        pos: {x: 10, y: 10},
        solution: "Gesellschaft",
        status: default_status
    },
    {
        name: "Sprachwissenschaften",
        pos: {x: 20, y: 20},
        solution: "Sowi",
        status: default_status
    },
    {
        name: "Bücherei",
        pos: {x: 80, y: 90},
        solution: "",
        status: default_status
    },
    {
        name: "Kunst und Musik",
        pos: {x: 15, y:15},
        solution: "Ist das Kunst?",
        status: default_status
    },
    {
        name: "Naturwissenschaften",
        pos: {x: 70, y: 80},
        solution: "Natur",
        status: default_status
    },
    {
        name: "Informatik",
        pos: {x: 50, y: 50},
        solution: "",
        status: default_status
    }
]
//Export constants
export {group_count, beginning_stations, general_stations, ending_stations}

//All stations connected together
const all_stations = beginning_stations.concat(general_stations).concat(ending_stations)

//Local function to generate general_id by group and inner general station count
function general_group_station(group_id: number, station_num: number): number {
    const first_general_station = group_id % general_stations.length
    if (group_id >= group_count/2) return (first_general_station + general_stations.length - station_num) % general_stations.length
    else return (first_general_station + station_num) % general_stations.length
}

//Generating Station ID for station number and group
function id_by_group_and_num(group_id: number, station_num: number): number {
    //Check if beginning stations
    if (station_num < beginning_stations.length) {
        return station_num
    }
    //Check if ending station
    if (station_num >= beginning_stations.length + general_stations.length) {
        return station_num
    }
    // Split up stations to groups
    return general_group_station(group_id, station_num)
}

export {all_stations, id_by_group_and_num}