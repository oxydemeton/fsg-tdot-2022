import type {Station} from "./Station"

//Total count of groups wich exist
const group_count = 12

//Status all Groups start with
const default_status = -1
const beginning_stations: Station[] = [
    {
        name: "Mensa",
        pos: {x: 2, y: 60},
        status: 0,
        floor: 0,
        desc: (_)=>"Los geht's!"
    }
]

//Stations all groups end with
const ending_stations: Station[]  = [
    {
        name: "Sporthalle",
        pos: {x: 95, y: 65},
        status: default_status,
        desc: ()=>"Nach draußen gehen und dann gerade aus ->",
        floor: 0
    }
]

//Regular Stations wich are split up between the groups
const general_stations: Station[]  = [
    {
        name: "Gesellschaftswissenschaften",
        pos: {x: 33, y: 35},
        solution: (answer: string) => answer.toLocaleLowerCase() == "FSG".toLowerCase(),
        status: default_status,
        floor: 0
    },
    {
        name: "Sprachwissenschaften",
        pos: {x: 55, y: 35},
        solution: (answer: string) => answer.toLocaleLowerCase() === "FREMDSPRACHE".toLowerCase(),
        status: default_status,
        floor: 1
    },
    {
        name: "Bücherei",
        pos: {x: 94, y: 75},
        desc: (_)=>"Dies ist eine optionale Station",
        status: default_status,
        floor: -1
    },
    {
        name: "Kunst und Musik",
        pos: {x: 28, y:10},
        solution: (answer: string) => answer.toLocaleLowerCase() === "KULTUR".toLowerCase(),
        status: default_status,
        floor: 0
    },
    {
        name: "Naturwissenschaften",
        pos: {x: 92, y: 85},
        solution: (answer: string) => answer === "145",
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
    const general_station = (group_id + station_num - beginning_stations.length) % general_stations.length
    if (group_id > group_count/2) return invert_general_station(general_station) - ending_stations.length //+ beginning_stations.length
    else return general_station + beginning_stations.length
}

//Id from general stations not all stations!
function invert_general_station(id: number): number {
    return general_stations.length - id +1
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

export {all_stations, id_by_group_and_num, default_status}
