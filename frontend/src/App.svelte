<script lang="ts">
    import Header from "./Header.svelte";
    import {all_stations, default_status, group_count, id_by_group_and_num} from "./script/Stations_and_gruops"
    import Map from "./components/Map.svelte";
    import Station from "./components/Station.svelte";
    import GroupSelector from "./components/GroupSelector.svelte";
    import ResetIcon from "./assets/reset.png"
    import InfoIcon from "./assets/info.svg"
    import InfoScreen from "./components/InfoScreen.svelte";
    //Loop to log the station order of each group
    /*for (let i = 0; i < group_count; i++) {
        for (let j = 0; j < all_stations.length; j++) {
            console.log("gruppe: " + i + " " + all_stations[id_by_group_and_num(i, j)].name);
        }
    }*/
    let floor = 0
    let group: number = -1
    let station_num = 0
    let show_info = false
    //Function called on the reset button and when the tour is finished
    function reset() {
        group = -1
        station_num = 0
        all_stations.forEach((it, i, arr)=>{
            arr[i].status = default_status
            if (i === 0) arr[i].status = 0
        })
        console.log("RESET")
    }
    //Function to be called if the a station is done
    function station_done(station_id) {
        station_num++
        //Reset after last station
        if(station_num >= all_stations.length){
            reset()
        }else {
            all_stations[station_id].status = 1
            all_stations[id_by_group_and_num(group, station_num)].status = 0
        }
    }

    //Code to execute on page Load
    const hash_params = {}
    window.location.hash.replace("#", "").split("&").forEach((t)=>{
        const name = t.split("=")[0]
        hash_params[name] = t.split("=")[1]
    })
    //If the group is given as a parameter use it, otherwise show selector
    if (!isNaN(Number(hash_params["group"]))) {
        group = Number(hash_params["group"]) % group_count
    }

</script>

<Header station={all_stations[id_by_group_and_num(group, station_num)].name}></Header>
<div id="bg">
    <main>
        <Map bind:floor_lvl={floor}> </Map>
        <div id="Info">
            {#if (show_info)}
                <InfoScreen></InfoScreen>
            {:else}
                <button on:click={()=>show_info = !show_info} class="absolute top-2 right-16 w-12 h-12" type="button">
                    <img src={InfoIcon} alt="Show Info">
                </button>
            {/if}
        </div>
        {#if group >= 0}
            <button on:click={reset} class="absolute top-2 right-2 w-12 h-12" type="button">
                <img src={ResetIcon} alt="Reset" class="w-full h-full"/>
            </button>
            <div id="Stations">
            {#each all_stations as sta, i (i)}
                <Station bind:station={sta} on:done={()=>station_done(i)} bind:floor={floor} bind:group={group} last={i === (all_stations.length -1)}></Station>
            {/each}
            </div>
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