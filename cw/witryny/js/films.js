let filmy = (() => {
	const wrapper = document.querySelector('#wrapper');

	let _wstaw = () => {
			fetch('js/films.json')
				.then( dane => dane.json())
				.then( dane => {
					Object.keys(dane.films).map( nr => {

						// console.log(dane.films[nr]['thumbnail'])
						// console.log(dane.films[nr]['tytul'])

						_addel(dane.films[nr]['thumbnail'], dane.films[nr]['tytul'], nr);

					})
				})
		},
			_addel = (thumbnail, tytul, nr) => {
				const wideo_block = document.createElement('div');
							wideo_block.className = 'wideo_block icon-search';
							wideo_block.onclick = e => _pokaz(nr, e);

				const img = document.createElement('img');
							img.src = thumbnail;
							img.className = 'thumbnail';

				const p = document.createElement('p');
							p.className = 'tytul';
							p.innerHTML = `${nr}# ${tytul}`;

				wideo_block.appendChild(img);
				wideo_block.appendChild(p);

				wrapper.appendChild(wideo_block);
			},

			_pokaz = (nr, e) => {
				if(document.getElementById('background_video')) document.getElementById('background_video').remove();

				if(document.getElementsByClassName('background_video').length == 0){
					const tlo = document.createElement('div');
								tlo.id = 'background_video';
						    tlo.onclick = () => _wylacz()

					const div = document.createElement('div');
								div.id = 'video_container';
								div.onclick = e => {
									e.stopPropagation();
								}

					const title = document.createElement('a');
								title.className = 'video_title';
								title.target = "_blank";

					const video = document.createElement('video');
								// video.autoplay = true;
								video.controls = true;

					const description = document.createElement('p');
								description.className = 'video_description';

					const rok = document.createElement('h6');
								rok.className = 'rok';

					const video_nr = document.createElement('h2');
								video_nr.className = 'video_nr';
								video_nr.innerHTML = `${nr}#&nbsp;`;

					const previous = document.createElement('a');
								previous.className = 'previous_video';

					const next = document.createElement('a');
								next.className = 'next_video';
							


					fetch('js/films.json')
						.then( dane => dane.json())
						.then( dane => {
							video.src = dane.films[nr].video;
							video.poster = dane.films[nr].thumbnail;

							title.innerText = dane.films[nr].tytul;
							title.href = dane.films[nr].link;
							title.title = `Kliknij żeby wejść na stronę z filmem: ${dane.films[nr].tytul}`;

							if(nr == 1) previous.style.display = 'none';
							else{
								previous.onclick = () => _pokaz(parseInt(nr) - 1);
								previous.title = dane.films[parseInt(nr) - 1].tytul;
							}

							if(Object.keys(dane.films).length == nr) next.style.display = 'none';
							else{
								next.onclick = () => _pokaz(parseInt(nr) + 1);
								next.title = dane.films[parseInt(nr) + 1].tytul;
							}

							rok.innerHTML = `&nbsp;(${dane.films[nr].rok})`;

							description.innerText = dane.films[nr].description;
						})

					div.appendChild(video_nr);
					div.appendChild(title);
					div.appendChild(rok);
					div.appendChild(video);
					div.appendChild(description);
					div.appendChild(previous);
					div.appendChild(next);
					tlo.appendChild(div);
					setTimeout(() => tlo.style.opacity = 1, 10);

					document.querySelector('body').appendChild(tlo);
				}
			}, 

			_wylacz = () => {
				document.getElementById('background_video').style.opacity = 0;
				setTimeout(() => document.getElementById('background_video').remove(), 300);
			}

		return{
			wstaw: _wstaw,
			addel: _addel
		}
})();