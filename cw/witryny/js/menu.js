let menu = {
	kontakt: {
			on: (firstTime = false) => {

				const kontakt = document.getElementsByClassName('kontakt');

				let autor = 'Tomasz Kumor Kl. 3i',
						to_resize = null;

				let add_event = () => Array.from(kontakt).forEach(el => el.onclick = e => pokaz(autor, e));

				let pokaz = (dane, e, ham = false) => {
							if( document.querySelectorAll('.kontakt_blok_napis').length == 1){
								document.querySelector('.kontakt_blok_napis').remove();
								setTimeout(() => {
									document.getElementsByClassName('effect_window')[0].remove();
								}, 1000);
							}


							let div = document.createElement('div');
									div.className = 'kontakt_blok_napis';
									div.style.position = 'fixed';
									div.style.top = 0;
									div.style.left = 0;
									div.style.width = '100vw';
									div.style.height = '100vh';
									div.style.display = 'flex';
									div.style.justifyContent = 'center';
									div.style.alignItems = 'center';
									div.style.zIndex = 5;
									div.innerHTML = dane;
									
							if(window.top.innerWidth < 800) hamburger('on');
							else setTimeout(() => hamburger('on'), 1000 );

							menu.efekt(e);

							document.querySelector('body').appendChild(div);
							
							if(ham) add_event();
				}

				let hamburger = czyWlaczone => {
					let hamburger = document.getElementById('hamburger');

					if(czyWlaczone == 'on') {
						
						hamburger.className = 'active';
						hamburger.style.display = 'unset';

					}else if(czyWlaczone == 'off'){

						hamburger.className = 'close';

					}

					window.addEventListener('resize', e => {

						clearTimeout(to_resize);
						to_resize = setTimeout(() => {
							if(window.top.innerWidth < 800) hamburger.style.display = 'block';
							else setTimeout(() => hamburger.style.display = 'none', 200);
							hamburger.className = 'close';
						},200);

					});

						hamburger.onclick = click => {
							if(hamburger.className == 'active'){
								hamburger.style.display = 'none';
								menu.kontakt.off();
								if(window.top.innerWidth < 800) hamburger.style.display = 'block';
								hamburger.className = 'close';
							}else {
								let lista = [];
								Array.from(document.querySelectorAll('.page_wrapper > span > button')).forEach(e => {
									if(e.innerText.indexOf('Twórca') >= 0) lista.push(`<p style="display: block;" class="kontakt">${e.innerText}</p>`)
									else lista.push(`<p>${e.innerText}</p>`);
								});

								pokaz(lista, click, true);
							}
						}
				}

				hamburger();
				add_event();




				},

			off: () => {
						document.querySelector('body').style.overflow = 'unset';

						let efekt = document.querySelector('.effect_window');
	
						if(efekt){
							efekt.style.animation = 'effect_window_close 1s ease';
							efekt.style['-webkit-animation'] = 'effect_window_close 1s ease';
							document.querySelector('.kontakt_blok_napis').remove();

							setTimeout(() => {
								document.querySelector('.effect_window').remove();
							},1000);
						}
					}
	},

	efekt: e => {
		document.querySelector('body').style.overflow = 'hidden';
	
		let effect = document.createElement('div');
		    effect.className = 'effect_window';

		let width = 'vw', 
				height = 'vh';

		if(window.top.innerWidth > window.top.innerHeight) height = width;
		else width = height;

		effect.style.top = `calc(-65${height} + ${e.clientY}px)`;
		effect.style.left = `calc(-65${width} + ${e.clientX}px)`;
		effect.style.height = `130vmax`;
		effect.style.width = `130vmax`;

		document.querySelector('body').appendChild(effect);

		return effect
	},









































	// wstaw: dane => {
	// 	_animation = (text, div, akcja = '') => {
	// 		Array.from(text).forEach((letter, id) => {
	// 			let span = document.createElement('span');
	// 					span.style.opacity = 0;
	// 					span.style.transition = 'opacity .5s cubic-bezier(.17,.67,.83,.67), margin .2';
	// 					span.className = `kontakt_name ${akcja}`;
	// 					if(letter == ' ') span.innerHTML = '&nbsp;';
	// 					else span.innerHTML = letter;
	// 				div.appendChild(span);



	// 			setTimeout(() => {
	// 				let take_in_letter = document.getElementsByClassName('kontakt_name')[id];

	// 				if(document.getElementsByClassName('kontakt_name').length != 0) take_in_letter.style.opacity = 1;
	// 				if(id + 1 == text.length){
	// 					menu.kontakt.on();
	// 					menu.hamburger('open', 'background');
	// 				}
	// 			}, 300 * (id + 1));

	// 			setTimeout(() => {
	// 				let take_in_letter = document.getElementsByClassName('kontakt_name')[id];

	// 				let marginesy = [0, 2, 4, 2, 0];
	// 				marginesy.forEach((z, which) => {
	// 					setTimeout(() =>{
	// 						if(document.getElementsByClassName('kontakt_name').length != 0) take_in_letter.style.marginBottom = `${z}px`;
	// 					}, 100 * which);
	// 				});

					
	// 			}, 100 * id + 300 * text.length);
	// 		});
	// 	}




	// 	let div = document.createElement('div');
	// 			div.className = 'kontakt_blok_napis';
	// 			div.style.position = 'fixed';
	// 			div.style.top = 0;
	// 			div.style.left = 0;
	// 			div.style.width = '100vw';
	// 			div.style.height = '100vh';
	// 			div.style.display = 'flex';
	// 			div.style.justifyContent = 'center';
	// 			div.style.alignItems = 'center';
	// 			div.style.zIndex = 5;

	// 	if(dane.indexOf('Twórca') == 0){
	// 		_animation(dane, div, 'kontakt_z');
	// 	}else _animation(dane, div);

		

	// 	document.querySelector('body').appendChild(div);
	// }
}