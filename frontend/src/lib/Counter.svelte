<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment} class="border-8 border-black">
  count is {count}
</button>

<style>
</style>