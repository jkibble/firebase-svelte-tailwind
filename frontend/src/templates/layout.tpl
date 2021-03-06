<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta id="language" data-language="<%- locale %>" />
    <meta id="page" data-page="<%- page %>" />
    <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
  </head>
  <body
    class="bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100"
  >
    <header
      role="navigation"
      class="max-w-screen sticky top-0 z-50 mx-auto bg-gray-200/60 backdrop-blur dark:bg-gray-700/60 print:hidden"
      id="menu"
    ></header>
    <script type="module">
      import Menu from "/components/menu.svelte";
      const menu = new Menu({
        target: document.getElementById("menu"),
      });

      export default menu;
    </script>
    <script type="module">
      import App from "{entry}";

      const app = new App({
        target: document.getElementById("app"),
      });

      export default app;
    </script>

    <div id="app"></div>

    <footer class="footer pt-5 pb-5 print:hidden">here is the footer</footer>
  </body>
</html>
