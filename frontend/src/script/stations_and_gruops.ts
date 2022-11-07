
const group_count = 10

//Stations all Groups start with
const beginning_stations = [
    "Mensa"
]

//Stations all groups end with
const ending_stations = [
    "Sporthalle"
]

//Regular Stations wich are split up between the groups
const general_stations = [
    "Gesellschaftswissenschaften",
    "Sprachwissenschaften",
    "Bücherei",
    "Kunst und Musik",
    "Naturwissenschaften"
]
//Export constants
export {group_count, beginning_stations, general_stations, ending_stations}

//All stations connected together
const all_stations = beginning_stations.concat(general_stations).concat(ending_stations)

//Local function to generate general_id by group and inner general station count
function general_group_station(group_id: number, station_num: number): number {
    const first_general_station = group_id % general_stations.length
    return (first_general_station + station_num) % general_stations.length
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