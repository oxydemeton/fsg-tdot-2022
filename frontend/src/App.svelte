<script lang="ts">
    import Header from "./Header.svelte";
    import {all_stations, group_count, id_by_group_and_num} from "./script/Stations_and_gruops"
    import Map from "./components/Map.svelte";
    import Station from "./components/Station.svelte";
    import GroupSelector from "./components/GroupSelector.svelte";
    import Reset from "./assets/reset.png"

    /*for (let i = 0; i < group_count; i++) {
        for (let j = 0; j < all_stations.length; j++) {
            console.log("gruppe: " + i + " " + all_stations[id_by_group_and_num(i, j)].name);
        }
    }*/
    let floor = 0

    let group: number = -1
    let station_num = 0
    function reset() {
        group = -1
        station_num = 0
    }
    function station_done(station_id) {
        station_num++   
        all_stations[station_id].status = 1
        all_stations[id_by_group_and_num(group, station_num)].status = 0
        //Reset after finish
        if(station_num >= all_stations.length) reset()
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
        <Map bind:floor_lvl={floor}> </Map>
        {#if group >= 0}
            <button on:click={reset} class="absolute top-2 right-2 w-12 h-12">
                <img src={Reset} alt="Reset" class="w-full h-full"/>
            </button>
            {#each all_stations as sta, i (i)}
                <Station station={sta} on:done={()=>station_done(i)} bind:floor={floor}></Station>
            {/each}
        {:else}
            <GroupSelector on:select={(g)=>group = g.detail}></GroupSelector>
        {/if}
    </main>
</div>

<style>
    #bg {
        background-color: rgb(46, 46, 46)
    }
    main {
        @apply overflow-hidden h-[100vh] w-[133vh] relative select-none;
    }
</style>