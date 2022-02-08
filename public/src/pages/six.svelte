<script>
  import Email from "/lib/input/email.svelte";
  import Checkbox from "/lib/input/checkbox.svelte";
  import Password from "/lib/input/password.svelte";
  import Search from "/lib/input/search.svelte";
  import Date from "/lib/input/date.svelte";
  import Datalist from "/lib/input/datalist.svelte";

  const options = [
    { id: "au", value: "Australia" },
    { id: "be", value: "Belgium" },
    { id: "ca", value: "Canada" },
    { id: "cn", value: "China" },
    { id: "fr", value: "France" },
    { id: "de", value: "Germany" },
    { id: "it", value: "Italy" },
    { id: "mx", value: "Mexico" },
    { id: "es", value: "Spain" },
    { id: "tr", value: "Turkey" },
    { id: "gb", value: "United Kingdom" },
    { id: "us", value: "United States" },
  ];

  let form;
</script>

<h2>Different Input Components</h2>

<div class="grid gap-3 sm:grid-cols-1 xl:grid-cols-2">
  <form
    action="/post"
    method="POST"
    novalidate={true}
    bind:this={form}
    on:submit={() => form.checkValitity()}
  >
    <Email label="Email" name="email" required="true" />
    <Checkbox label="Checkbox" name="checkbox" />
    <Password label="Password" name="password" required="true" />
    <Search label="Search (not required)" name="search" />
    <Date label="Date" name="date" required="true" />
    <Datalist {options} label="Datalist" required="true" />
    <input type="submit" class="btn" value="send" />
  </form>
</div>
