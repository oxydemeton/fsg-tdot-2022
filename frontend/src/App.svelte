<script lang="ts">
    import Header from "./Header.svelte";
    import {all_stations, id_by_group_and_num} from "./script/Stations_and_gruops"
    import Map from "./components/Map.svelte";
    import Station from "./components/Station.svelte";
    import type {Station as StationType} from "./script/Station"

    let group = 0
    let station_num = 0
    function next_station() {

    }

    function station_done(station_id) {
        station_num++
        all_stations[station_id].status = 1
        all_stations[id_by_group_and_num(group, station_num)].status = 0

    }

</script>

<Header station={id_by_group_and_num(group, station_num).toString()}></Header>
<main>
    <Map></Map>
    {#each all_stations as sta, i (i)}
        <Station station={sta} on:done={()=>station_done(i)}></Station>
    {/each}
</main>
<style>
main {
    @apply overflow-hidden h-[98vh] w-[130vh] relative;
}
</style>