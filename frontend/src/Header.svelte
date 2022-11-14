<script lang="ts">
    export let station: string
    import Eg               from "./assets/map/eg.png"
    import Ug               from "./assets/map/ug.png"
    import Og               from "./assets/map/og.png"
    import LockClosed       from "./assets/schloss_closed.jpg"
    import LockOpen         from "./assets/schloss_closed.jpg"
    import LockSelected     from "./assets/schloss_closed.jpg"
    const images = [
        Eg,
        Og,
        Ug,
        LockClosed,
        LockOpen,
        LockSelected
    ]
</script>

<svelte:head>
    <title>Station: {station}</title>

    {#each images as pre_img}
        <link rel="prefetch" href={pre_img} as="image">
    {/each}

</svelte:head>