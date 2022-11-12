<script lang="ts">
    import Header from "./Header.svelte";
    import {all_stations, group_count, id_by_group_and_num} from "./script/Stations_and_gruops"
    import Map from "./components/Map.svelte";
    import Station from "./components/Station.svelte";

    let group: number = 0
    let station_num = 0

    function station_done(station_id) {
        station_num++
        all_stations[station_id].status = 1
        all_stations[id_by_group_and_num(group, station_num)].status = 0

    }

    //Code to execute on page Load
    const hash_params = {}
    window.location.hash.replace("#", "").split("&").forEach((t)=>{
        const name = t.split("=")[0]
        hash_params[name] = t.split("=")[1]
    })
    if (!isNaN(Number(hash_params["group"]))) {
        group = Number(hash_params["group"]) % group_count
    }

</script>

<Header station={all_stations[id_by_group_and_num(group, station_num)].name}></Header>
<div id="bg">
    <main>
        <Map></Map>
        {#each all_stations as sta, i (i)}
            <Station station={sta} on:done={()=>station_done(i)}></Station>
        {/each}
        {group}
    </main>
</div>
<style>
    #bg {
        background-color: rgb(46, 46, 46)
    }
    main {
        @apply overflow-hidden h-[100vh] w-[133vh] relative;
    }
</style>