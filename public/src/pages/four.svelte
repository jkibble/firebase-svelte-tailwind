<script>
  import Counter from "/lib/Counter.svelte";
  import Editor from "/lib/Editor.svelte";
  import Table from "/lib/Table.svelte";
  import Timer from "/lib/Timer.svelte";

  const options = [
    { name: "Counter", component: Counter },
    { name: "Editor", component: Editor },
    { name: "Table", component: Table },
    { name: "Timer", component: Timer },
  ];

  let selected = options[0];
</script>

<div class="md:w-full lg:w-1/2">
  <h3 class="mb-5 font-bold">Component selector</h3>

  <select bind:value={selected}>
    {#each options as option}
      <option value={option}>{option.name}</option>
    {/each}
  </select>

  <h3>{selected.name}</h3>

  <div class="mt-5 shadow-md dark:shadow-gray-400">
    <svelte:component this={selected.component} />
  </div>
</div>

<svelte:head>
  <title>
    {selected.name}
  </title>
</svelte:head>

<style>
  h3 {
    @apply mt-5 font-bold;
  }
</style>
