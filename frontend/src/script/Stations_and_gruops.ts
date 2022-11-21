import type {Station} from "./Station"

const group_count = 8

//Stations all Groups start with
const default_status = -1
const beginning_stations: Station[] = [
    {
        name: "Mensa",
        pos: {x: 0, y: 80},
        status: 0,
        floor: 0
    }
]

//Stations all groups end with
const ending_stations: Station[]  = [
    {
        name: "Unterstufen Schulhof",
        pos: {x: 8, y: 25},
        desc: "Finde so paar Boxen",
        status: default_status,
        floor: 0
    }
]

//Regular Stations wich are split up between the groups
const general_stations: Station[]  = [
    {
        name: "Gesellschaftswissenschaften",
        pos: {x: 33, y: 35},
        solution: "Gesellschaft",
        status: default_status,
        floor: 0
    },
    {
        name: "Sprachwissenschaften",
        pos: {x: 55, y: 35},
        solution: "Sowi",
        status: default_status,
        floor: 1
    },
    {
        name: "Bücherei",
        pos: {x: 92, y: 72},
        status: default_status,
        floor: -1
    },
    {
        name: "Kunst und Musik",
        pos: {x: 28, y:10},
        solution: "Ist das Kunst?",
        status: default_status,
        floor: 0
    },
    {
        name: "Naturwissenschaften",
        pos: {x: 92, y: 80},
        solution: "Natur",
        status: default_status,
        floor: 1
    },
    {
        name: "Informatik",
        pos: {x: 24, y: 35},
        status: default_status,
        floor: 1
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