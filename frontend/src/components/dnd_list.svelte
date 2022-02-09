<script>
  import { flip } from "svelte/animate";

  export let list = [];

  let hovering = null;

  const drop = (event, target) => {
    event.dataTransfer.dropEffect = "move";
    const start = parseInt(event.dataTransfer.getData("text/plain"));
    const newTracklist = list;

    if (start < target) {
      newTracklist.splice(target + 1, 0, newTracklist[start]);
      newTracklist.splice(start, 1);
    } else {
      newTracklist.splice(target, 0, newTracklist[start]);
      newTracklist.splice(start + 1, 1);
    }
    list = newTracklist;
    hovering = null;
  };

  const dragstart = (event, index) => {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text/plain", index);
  };
</script>

<h2>Drag and Drop Example</h2>

<div class="w-1/3">
  {#each list as item, index (item)}
    <div
      animate:flip={{ duration: 400 }}
      draggable={true}
      on:dragstart={(event) => dragstart(event, index)}
      on:drop|preventDefault={(event) => drop(event, index)}
      on:dragenter={() => (hovering = index)}
      on:dragover|preventDefault={() => false}
      class="border-1 mt-2 rounded-lg border border-gray-400 bg-indigo-400 p-2 text-center"
      class:is-active={hovering === index}
    >
      {item}
    </div>
  {/each}
</div>

<style>
  .is-active {
    @apply bg-slate-400 text-white;
  }
</style>
