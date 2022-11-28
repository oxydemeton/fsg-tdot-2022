import type {Station} from "./Station"

const group_count = 8

//Stations all Groups start with
const default_status = -1
const beginning_stations: Station[] = [
    {
        name: "Mensa",
        pos: {x: 2, y: 80},
        status: 0,
        floor: 0,
        desc: (_)=>"Los geht's!"
    }
]

//Stations all groups end with
const ending_stations: Station[]  = [
    {
        name: "Schulhof",
        pos: {x: 8, y: 25},
        desc: (group_id: number)=>{
            const gen_desc = (schulhof: string, farbe: string): string => {
                return "Finde eine " + farbe + " Box auf dem " + schulhof
            }
            switch (group_id) {
                case 0:
                    return gen_desc("Mittlerer schulhof", "rote")
                case 1:
                    return gen_desc("Mittlerer schulhof", "blaue")
                case 2:
                    return gen_desc("Mittlerer schulhof", "gelbe")
                case 3:
                    return gen_desc("Mittlerer schulhof", "grüne")
                case 4:
                    return gen_desc("Südlichen schulhof", "rote")
                case 5:
                    return gen_desc("Südlichen schulhof", "blaue")
                case 6:
                    return gen_desc("Südlichen schulhof", "gelbe")
                case 7:
                    return gen_desc("Südlichen schulhof", "grüne")
                default:
                    console.error("Unkown Group ID: " + group_id);
                    return "Geht direkt weiter zur Sporthalle."
            }
        },
        status: default_status,
        floor: 0
    }
]

//Regular Stations wich are split up between the groups
const general_stations: Station[]  = [
    {
        name: "Gesellschaftswissenschaften",
        pos: {x: 33, y: 35},
        solution: "FSG",
        status: default_status,
        floor: 0
    },
    {
        name: "Sprachwissenschaften",
        pos: {x: 55, y: 35},
        solution: "FREMDSPRACHE",
        status: default_status,
        floor: 1
    },
    {
        name: "Bücherei",
        pos: {x: 92, y: 72},
        desc: (_)=>"Dies ist eine optionale Station",
        status: default_status,
        floor: -1
    },
    {
        name: "Kunst und Musik",
        pos: {x: 28, y:10},
        solution: "KULTUR",
        status: default_status,
        floor: 0
    },
    {
        name: "Naturwissenschaften",
        pos: {x: 92, y: 80},
        solution: "145",
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
    const general_station = (station_num - beginning_stations.length) % general_stations.length
    if(group_id > group_count/2) return invert_general_station(general_station) + beginning_stations.length
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