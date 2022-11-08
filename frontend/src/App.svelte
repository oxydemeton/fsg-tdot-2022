<script lang="ts">
    import Header from "./Header.svelte";
    import {all_stations, id_by_group_and_num} from "./script/Stations_and_gruops"
    import Map from "./components/Map.svelte";
    import Station from "./components/Station.svelte";
    import type {Station as StationType} from "./script/Station"

    let group = 0
    let station_num = 0
    $: station = (): StationType => {
        return all_stations[id_by_group_and_num(group, station_num)]
    }

</script>

<Header station={id_by_group_and_num(group, station_num).toString()}></Header>
<main>
    <Map></Map>
    <Station station={station()} pos={{x: 50, y:50}} status={0}></Station>
</main>
<style>
main {
    @apply overflow-hidden h-[98vh] w-[130vh] relative;
}
</style>