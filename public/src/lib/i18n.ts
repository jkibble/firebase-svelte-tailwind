const buildTranslator = () => {
  const page: string = document
    .getElementById("page")
    .getAttribute("data-page");
  const locale: string = document
    .getElementById("language")
    .getAttribute("data-language");

  let cache = {};

  return async (key: string, ...args: any) => {
    if (!(key in cache)) {
      await fetch(`/locales/${locale}/${page}.json`)
        .then((res) => {
          return res.json();
        })
        .then((trans: object) => {
          console.log("here again");
          cache = Object.assign(cache, trans);
        });
    }

    return cache[key] || key;
  };
};

export default buildTranslator();
