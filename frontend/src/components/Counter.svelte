<script>
  let count = 0;
  const increment = () => {
    count++;
  };
</script>

<h3>Just a button that counts up when you click it</h3>

<button class="btn" on:click={increment}>
  Clicks: <span>{count}</span>
</button>
