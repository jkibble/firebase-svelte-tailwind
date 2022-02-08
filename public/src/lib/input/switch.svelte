<script>
  export let label = "";
  export let toggle = false;
</script>

<label class="relative flex items-center justify-between p-2">
  {label}
  <input
    type="checkbox"
    class="peer invisible absolute left-0 top-0 h-full w-full rounded-md"
    bind:checked={toggle}
  />
  <span
    class="ml-4 flex h-7 w-12 flex-shrink-0 items-center rounded-full bg-gray-300 p-1 duration-300
    ease-in-out 
    after:h-5 
    after:w-5 
    after:rounded-full
    after:bg-white after:shadow-md after:duration-300 peer-checked:bg-green-400
    peer-checked:after:translate-x-5
    "
  />
</label>
