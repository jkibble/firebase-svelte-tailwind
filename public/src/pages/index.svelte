<script>
  import I18n from "/lib/i18n.svelte";
</script>

<h1>Translations play ground</h1>

<h3>
  <I18n key="foo" />
</h3>

<input type="text" name="" id="" placeholder="" />

<p>
  <I18n key="foo" />
</p>

<h4>here is the email thing we're gonna try</h4>
<I18n key="foo" />

<style>
  h3,
  h1 {
    @apply mt-5 font-bold;
  }

  h1 {
    @apply text-3xl text-red-400;
  }
</style>
