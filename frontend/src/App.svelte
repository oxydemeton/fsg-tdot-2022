<script lang="ts">
    import Header from "./Header.svelte";
    import {id_by_group_and_num} from "./script/stations_and_gruops"
    import Map from "./components/Map.svelte";

    let group = 0
    let station_num = 0

</script>

<Header station={id_by_group_and_num(group, station_num)}></Header>
<main>
    <Map></Map>
</main>
<style>

</style>