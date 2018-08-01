(() => {

	const przycisk  = document.querySelector('#fraza-potwierdz'),
				wypisz    = document.querySelector('#wynik');


	przycisk.addEventListener('click', () => {

			const tekst = document.querySelector('#fraza');

			const apiUrl = 'https://pixabay.com/api';
			const apiKey =  '8653965-67fc8570b61c58e735d9adade';
			const searchQuery = tekst.value;

			if(wypisz.children.length > 0){
				Array.from(wypisz.children).map((e, i) => {
					e.remove();
				});
			}

			fetch(`${apiUrl}/?key=${apiKey}&q=${searchQuery}s&image_type=photo&per_page=20&safesearch=true`)
				.then(resp => resp.json())
				.then(resp => {
					const style = {
						'height': 0,
						'width': '250px',
						'opacity': 1,
						'backgroundPosition': 'center center',
						'backgroundSize': 'cover',
						'backgroundRepeat': 'no-repeat',
						'backgroundPosition': 'top',
						'transition': 'all .5s ease',
				    'margin': '10px',
				    'border': '0px dotted #e3e3e3',
				    'borderRadius': '6px'
					}

					Object.keys(resp['hits']).map((e, i) => {
						const wypisz_image = document.createElement('div');
									wypisz_image.style.backgroundImage = `url('${resp['hits'][e]['webformatURL']}')`;
									Object.keys(style).map((element, nr) => {
										wypisz_image.style[element] = style[element];
									});
									setTimeout(() => {
										wypisz_image.style.height = '250px';
										wypisz_image.style.opacity = 1;
										wypisz_image.style.border = '1px dotted #e3e3e3';
									}, (i+1) * 200);


						wypisz.appendChild(wypisz_image);
					})
					if(wypisz.className.indexOf('active') === -1) wypisz.className += ' active';
				})
	});

})();