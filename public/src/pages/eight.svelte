<script>
  import DndList from "/lib/dnd_list.svelte";

  let list = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
    "item9",
    "item10",
  ];
</script>

<DndList bind:list />
