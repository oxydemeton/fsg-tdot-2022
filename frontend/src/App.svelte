<script lang="ts">
    import Header from "./Header.svelte";
    import {id_by_group_and_num} from "./script/stations_and_gruops"

    let group = 0
    let station_num = 0

</script>

<Header station={id_by_group_and_num(group, station_num)}></Header>
<main>
    Hello Main Body
</main>
<style>

</style>