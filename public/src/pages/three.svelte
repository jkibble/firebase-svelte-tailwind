<script>
  import Editor from "/lib/Editor.svelte";
  import Counter from "/lib/Counter.svelte";
</script>

<h3 class="mb-5 font-bold">Welcome to the three page</h3>

<Counter />

<Editor />

<style>
  h3 {
    @apply mt-5 font-bold;
  }
</style>
