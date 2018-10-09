let dom = {
  nav: () => {
    const infobar = document.getElementById("infobar"),
      linki = document.querySelectorAll(`nav li a`);

    let to_scroll = null;

    // event scrollu
    document.addEventListener("scroll", e => {
      if (to_scroll) clearTimeout(to_scroll);

      to_scroll = setTimeout(() => {
        let linki = document.querySelectorAll("nav a");

        for (let i = linki.length; i > 0; i--) {
          if (
            window.top.scrollY -
              document.querySelector(linki[i - 1].hash).offsetParent
                .offsetTop >=
            -(window.top.innerHeight / 4)
          ) {
            // zmiana hasha w url

            history.pushState(null, null, linki[i - 1].hash);

            // zmiana umiejscowienia belki menu

            Array.from(linki).forEach((e, i, fe) => {
              if (e.href.indexOf(window.location.hash) >= 0) {
                infobar.style.left = `${25 * i}%`;
                fe.forEach(e => (e.className = ""));
                e.className = "active";
              }
            });

            break;
          }
        }
      }, 100);
    });

    // aktywowanie belki menu po zaladowaniu
    Array.from(linki).forEach((e, i, fe) => {
      if (window.location.hash.length <= 0) {
        linki[0].className = "active";
        infobar.style.left = `0%`;
      } else if (e.href.indexOf(window.location.hash) >= 0) {
        infobar.style.left = `${25 * i}%`;
        fe.forEach(e => (e.className = ""));
        e.className = "active";
      }

      // efekty po kliknieciu w menu

      e.addEventListener("click", click => {
        // efekt belki pod menu

        infobar.style.left = `${25 * i}%`;
        fe.forEach(e => (e.className = ""));
        e.className = "active";

        // efekt scrollu po kliknieciu w menu

        dom.afterLoading(e.hash);

        // efekt z androida 5 lolipop
        dom.and(click, e, i);
      });
    });

    // hamburger

    let hamburger = document.getElementsByClassName("hamburger")[0],
      lista = document.querySelector("#nav ul"),
      to_h_menu = null;

    hamburger.addEventListener("click", click => {
      dom.and(click);
      if (hamburger.className.indexOf("active") == -1) {
        // wyciagniete menu

        hamburger.className = "hamburger active";
        lista.style.display = "block";
        let height = lista.clientHeight;
        clearTimeout(to_h_menu);
        Array.from(lista.children).forEach((e, i) => {
          e.style.position = "absolute";
          e.style.top = `calc(${3 * i}em - ${i + 1}px)`;
          e.style.width = `100%`;
          e.style.height = 0;
          e.style.opacity = 0;
          to_h_menu = setTimeout(() => {
            e.style.height = `3em`;
            e.style.opacity = 1;
          }, 100 * (i + 1));

          e.onclick = () => {
            lista.removeAttribute("style");
            Array.from(lista.children).forEach(e => e.removeAttribute("style"));
            hamburger.className = "hamburger";
          };
        });
        lista.parentNode.style.overflow = "unset";

        setTimeout(() => {
          // lista.style.height = `${height}px`;
          lista.style.height = `0`;
        }, 100);

        window.addEventListener("resize", hamburger_resize);
      } else {
        // schowana belka od menu

        hamburger.className = "hamburger";

        lista.style.height = 0;
        setTimeout(() => lista.removeAttribute("style"), 200);
        setTimeout(() => {
          Array.from(lista.children).forEach(e => e.removeAttribute("style"));
        }, 200);
        lista.parentNode.style.overflow = "hidden";

        window.removeEventListener("resize", hamburger_resize);
      }
    });

    //

    let hamburger_resize = e => {
      if (window.top.innerWidth > 600) {
        lista.removeAttribute("style");
        Array.from(lista.children).forEach(e => e.removeAttribute("style"));
        hamburger.className = "hamburger";

        lista.parentNode.style.overflow = "hidden";
      }
    };
  },

  pages: () => {
    const c_pages = document.getElementById("pages_content");
    const c_apps = document.getElementById("aplications_content");

    fetch("js/json/pages.json")
      .then(resp => resp.json())
      .then(json => {
        Object.keys(json).map(what => {
          Array.from(json[what]).map(obj => {
            const strona = document.createElement("a");
            strona.className = "page_wrapper";
            strona.href = obj["href"];
            strona.target = "_blank";

            const title = document.createElement("p");
            title.className = "page_title";
            title.innerHTML = obj["title"];

            const thumb_w = document.createElement("div");
            thumb_w.className = "page_thumbnail";

            const thumb = document.createElement("div");
            thumb.className = "img";
            thumb.dataset.src = obj["dataSrc"];
            thumb.style.backgroundImage = `url('${obj["src"]}')`;
            thumb.style.backgroundRepeat = "no-repeat";
            thumb.style.backgroundPositionX = "center";
            thumb.style.backgroundPositionY = "center";
            thumb.style.backgroundSize = "cover";

            thumb_w.appendChild(thumb);

            strona.appendChild(thumb_w);
            strona.appendChild(title);

            if (what === "pages") c_pages.appendChild(strona);
            else if (what === "apps") c_apps.appendChild(strona);
          });
        });
      })
      .then(() => {
        funkcje.changeImages();
      });
  },

  and: (click, e = "nope", i) => {
    click.preventDefault();
    let x, y;

    if (e == "nope") {
      x = click.layerX == undefined ? click.offsetX : click.layerX;
      y = click.layerY == undefined ? click.offsetY : click.layerY;
    } else {
      x = click.layerX == undefined ? click.layerX : click.offsetX;
      y = click.layerY == undefined ? click.layerY : click.offsetY;
    }

    const effect = document.createElement("div");
    effect.className = "effect";
    effect.style.top = y + "px";

    if (e === "nope") effect.style.left = x + "px";
    else effect.style.left = x + i * e.clientWidth + "px";
    if (click.target.tagName.toLowerCase() == "div")
      click.target.appendChild(effect);
    else click.target.parentNode.appendChild(effect);
    setTimeout(function() {
      if (click.target.tagName.toLowerCase() == "div")
        click.target.removeChild(effect);
      else click.target.parentNode.removeChild(effect);
    }, 1100);
  },

  jezyki: () => {
    const rodzic = document.getElementById("o-mnie").parentNode,
      jezyk = document.querySelectorAll(".jezyk");

    let to_jezyk = null;

    fetch("js/json/jezyki.json")
      .then(resp => resp.json())
      .then(resp => {
        Object.keys(resp).forEach((name, z) => {
          const title_lang = document.createElement("h1");
          title_lang.className = "title";
          title_lang.innerText = name;

          rodzic.appendChild(title_lang);

          const jezyki = document.createElement("div");
          jezyki.className = "jezyki";

          Object.keys(resp[name]).forEach(lang => {
            if (resp[name][lang]["active"]) {
              const jezyk_info = `jezyk_info`;

              const jezyk = document.createElement("div");
              jezyk.className = "jezyk";
              jezyk.innerText = resp[name][lang]["name"].toUpperCase();

              jezyki.appendChild(jezyk);

              jezyk.onmousemove = event => {
                event.stopPropagation();
                if (to_jezyk) clearTimeout(to_jezyk);

                let Pozycjonowanie = (what, event) => {
                  let dane = resp[name][lang]["description"],
                    left = "unset",
                    right = "unset",
                    top = `${event.clientY}px`;

                  const target = "_blank", // skasuj wartosc jezeli link ma sie otwierac w tej samej karcie
                    title = "Link otworzy się w nowej karcie!"; // tresc okienka dialogowego po najechaniu na link

                  dane = dane.replace(
                    "<a",
                    `<a target="${target}" title="${title}"`
                  );

                  // adding quotation marks

                  if (resp[name][lang]["source"] !== undefined) {
                    const sources = resp[name][lang]["source"];

                    dane += `<br><br><hr><p style="margin-top: 10px; font-size: 20px;">Source:</p>`;
                    dane += "<ul>";
                    Array.from(sources).forEach(el => {
                      dane += `<li><a style="font-size: .6em;" href="${el}">${el}</a></li>`;
                    });
                    dane += "</ul>";
                  }

                  if (
                    window.top.innerWidth - event.clientX <
                    window.top.innerWidth * 0.3
                  )
                    right = `${window.top.innerWidth - event.clientX - 15}px`;
                  else left = `${event.clientX}px`;

                  // if(window.top.innerWidth < )

                  return (
                    (what.innerHTML = dane),
                    (what.style.left = left),
                    (what.style.right = right),
                    (what.style.top = top)
                  );
                };

                to_jezyk = setTimeout(() => {
                  if (document.querySelectorAll(`.${jezyk_info}`).length > 0) {
                    Pozycjonowanie(
                      document.querySelectorAll(`.${jezyk_info}`)[0],
                      event
                    );
                  } else {
                    const info = document.createElement("div");
                    info.className = jezyk_info;
                    info.style.position = "fixed";

                    Pozycjonowanie(info, event);

                    rodzic.appendChild(info);

                    info.addEventListener("mousemove", event =>
                      event.stopPropagation()
                    );
                  }
                }, 500);

                let Usun = what => {
                  if (what.length > 0) {
                    what[0].style.opacity = 0;
                    setTimeout(() => {
                      if (what.length > 0) what[0].remove();
                    }, 200);
                  }
                };

                window.addEventListener("scroll", () =>
                  Usun(document.querySelectorAll(`.jezyk_info`))
                );

                window.addEventListener("mousemove", () =>
                  Usun(document.querySelectorAll(`.jezyk_info`))
                );
              };

              jezyk.onmouseout = () => clearTimeout(to_jezyk);
            }
          });

          rodzic.appendChild(jezyki);
        });

        dom.afterLoading();
      });
  },

  afterLoading: (what = window.location.hash) => {
    if (what == "") what = "#header";
    window.scrollBy({
      top:
        document.querySelector(what).offsetParent.offsetTop -
        window.top.scrollY,
      left: 0,
      behavior: "smooth"
    });
  }
};
