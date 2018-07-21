const filmy = {
	adres: "https://scotch-mvplayer-api.herokuapp.com/api/v1",
	b_video: document.getElementById('video'),
	miniaturki_w: document.getElementById('thumbnail_wrapper'),

	wypisz: () => {
		fetch(filmy.adres)
			.then(dane => dane.json())
			.then(dane => {

				filmy.miniaturki_w.style.display = 'flex';
				filmy.miniaturki_w.style.flexDirection = 'row';
				filmy.miniaturki_w.style.flexWrap = 'wrap';

				dane.forEach((video, nr) => {
					const miniaturka = document.createElement('img');
								miniaturka.src = dane[nr].poster;
								miniaturka.className = 'thumbnail';
								miniaturka.onclick = () => filmy.pokaz_video(nr);

					filmy.miniaturki_w.appendChild(miniaturka);
				});

				filmy.pokaz_video(0);
			})
	},

	pokaz_video: nr_video => {
		
		if( !(document.querySelector('iframe.yt_video')) || (document.querySelector('iframe.yt_video').dataset.nr != nr_video)){
			fetch(filmy.adres)
			.then(dane => dane.json())
			.then(dane => {
				const yt = document.createElement('iframe');
							yt.src = dane[nr_video].trailer;
							yt.className = 'yt_video';
							yt.dataset.nr = nr_video;

				if(document.getElementsByClassName('yt_video').length > 0) document.getElementsByClassName('yt_video')[0].remove();

				filmy.b_video.appendChild(yt);
			})
		}
	}
}