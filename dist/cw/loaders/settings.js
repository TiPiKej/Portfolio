(() => {

let loaders = {
	buttons: el => {
		
		el.href = el.children[1].attributes.src.nodeValue;

		let button_wrapper = document.createElement('ul');
				button_wrapper.className = 'loaders_buttons_wrapper';

		const listing_wrapper = document.createElement('div');
					listing_wrapper.className = 'loaders_menu';
					listing_wrapper.innerText = '^';
					listing_wrapper.onclick = e => {
						e.stopPropagation();
						e.preventDefault();
						if(e.target.className.indexOf('active') >= 0) e.target.className = 'loaders_menu';
						else e.target.className += ' active';
					}

		button_wrapper.appendChild(listing_wrapper);

		let dane = [
			{
				link : el.children[1].attributes.src.nodeValue.replace('index.html', 'loader.css'),
				text : 'CSS'
			},
			{
				link : el.children[1].attributes.src.nodeValue.replace('index.html', 'loader.min.css'),
				text : 'MinCSS'
			},
			{
				link : el.children[1].attributes.src.nodeValue,
				text : 'html'
			}
		];

		for(const element of dane){
			const list_el = document.createElement('li');

			const blok = document.createElement('a');
						blok.href = element.link;
						blok.className = 'loaders_buttons';
						blok.innerText = element.text;
						blok.download = '';

			list_el.appendChild(blok);
			button_wrapper.appendChild(list_el);
		}

		el.appendChild(button_wrapper);

	}
}

let obietnica = new Promise((resolve, reject) => {

	const wrapper = document.querySelector('#wrapper');

	const loaders = [
		{
			text: "Single loader",
			link: "1/"
		},
		{
			text: "Double loader",
			link: "2/"
		},
		{
			text: "Open loader",
			link: "3/"
		},
		{
			text: "Lara Croft: loader",
			link: "4/"
		},
		{
			text: "Lara Croft w/o c: loader",
			link: "5/"
		},
		{
			text: "Allegro &copy; loader",
			link: "allegro_loader/"
		}
	];

	for(const element of loaders){
		const loader = document.createElement('a');
					loader.className = 'loader';

		const p = document.createElement('p');
					p.innerHTML = element.text;

		const iframe = document.createElement('iframe');
					iframe.src = element.link;

		loader.appendChild(p);
		loader.appendChild(iframe);

		wrapper.appendChild(loader);
	}

	resolve('Sukces');


});

obietnica.then(
	() => {
		Array.from(document.getElementsByClassName('loader')).forEach(el => {
			loaders.buttons(el);
		});
	}
)

$LAB
	.script('../host.js')

})();