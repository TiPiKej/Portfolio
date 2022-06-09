let funkcje = {
	variables: {
		loader: ".loader_wrapper"
	},
	loader: () => {
		document.querySelector(funkcje.variables.loader).style.opacity = 0;
		setTimeout(() => 
			document.querySelector(funkcje.variables.loader).style.display = 'none'
		, 500);
	},
	cookies: () => {
		
	},

	meta_adds : () => {
		const head = document.querySelector('head');

			const color_theme = document.createElement('meta');
						color_theme.name = 'theme-color';
						color_theme.content = '#212121';

			head.appendChild(color_theme);


			let rozmiary = [
				30,
				90, 
				160, 
				192
			];

			rozmiary.forEach(x => {
				if(typeof(x) == 'object') {
					y = x.y;
					x = x.x;
				}else y = x;
				const icon = document.createElement('link');
							icon.rel = 'icon';
							icon.sizes = `${x}x${y}`;
							icon.href = `/foto/icons/${x}x${y}.jpg`;

				document.querySelector('head').appendChild(icon);
			});
	},

	test : () => {
		let motto = document.getElementById('motto'),
				klasy = motto.className;

		if(motto.className.indexOf('animate') == -1){
			let jump = motto.animate([
			  {transform: 'translateY(-100px)'},
			  {transform: 'translateY(0px)'}
			],{
				delay: 500,
				duration: 1000,
				iterations: 5
			});

			jump.onfinish = () => {
				console.log('koniec');
				motto.className = klasy;
			};


			motto.className += 'animate';
		}

		// https://developer.mozilla.org/en-US/docs/Web/API/Element/animate

		
	},

	changeImages : () => {
		
		const loadImage = (image) => {
		  if(image.tagName.toLocaleLowerCase() == 'img') image.src = image.dataset.src;
		  else image.style.backgroundImage = `url('${image.dataset.src}')`;
		}

		const observer = new IntersectionObserver(
			(entries, observer) => {
			  entries.forEach(entry => {
			    if(entry.intersectionRatio > 0) {
			      loadImage(entry.target)
			    }
			  })
			}, {
			  root: null,
			  rootMargin: '0px',
			  threshold: 0.1
			});

		document.querySelectorAll('img').forEach(img => observer.observe(img));
		document.querySelectorAll('.img').forEach(img => observer.observe(img));

	}
}