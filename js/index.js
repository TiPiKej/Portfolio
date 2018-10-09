(() => {
  const pre = document.URL.indexOf("github") !== -1 ? "/Portfolio" : "/";

  $LAB
    .script(pre + "/js/core.min.js")
    .wait(() => {
      funkcje.meta_adds();
    })
    .script(pre + "/js/dom_elements.min.js")
    .wait(() => {
      dom.nav();
      dom.pages();
      dom.jezyki();
      funkcje.loader();
    })
    .script(pre + "/cw/host.js")
    .wait(() => {
      if (document.querySelector(".backButton"))
        document.querySelector(".backButton").remove();
    });
})();
