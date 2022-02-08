<script>
  import Email from "/lib/input/email.svelte";
  import Checkbox from "/lib/input/checkbox.svelte";
  import Password from "/lib/input/password.svelte";
  import Search from "/lib/input/search.svelte";
  import Table from "/lib/Table.svelte";

  import Tabs from "/lib/tabs.svelte";

  const routes = [
    { route: "Email", label: "Email", component: Email },
    { route: "Checkbox", label: "Checkbox", component: Checkbox },
    { route: "Password", label: "Password test", component: Password },
    { route: "Search", label: "Search box", component: Search },
    { route: "Table", label: "Table", component: Table },
  ];
</script>

<svelte:head>
  <title>Tabs and Router Test</title>
</svelte:head>

<h2><a href="/nine">Tabs + router test</a></h2>

<div class="w-1/2 pt-5">
  <Tabs tabs={routes} />
</div>
