(() => {
	const remove_link = () => {
		let link = 'https://www.000webhost.com';

		if(document.querySelector(`a[href ^= "${link}"]`))
			document.querySelector(`a[href ^= "${link}"]`).style.display = 'none';
	}

	const meta_adden = () => {
		const color_bar = '#03A9F4',
					head = document.querySelector('head');

		const meta = document.createElement('meta');
					meta.name = 'theme-color';
					meta.content = color_bar;

		head.appendChild(meta);
	}

	const back_button = () => {

		const styles = [
			{name: 'position', value: 'fixed'},
			{name: 'top', value: '20px'},
			{name: 'left', value: '20px'},
			{name: 'background', value: '#F9FBE7'},
			{name: 'height', value: '50px'},
			{name: 'width', value: '50px'},
			{name: 'cursor', value: 'pointer'},
			{name: 'borderRadius', value: '6px'},
			{name: 'display', value: 'flex'},
			{name: 'justifyContent', value: 'center'},
			{name: 'alignItems', value: 'center'},
			{name: 'backgroundImage', value: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 45 90' xmlns='http://www.w3.org/2000/svg' stroke-width='6' fill='none' stroke='%23000000'%3E%3Cline x1='0' y1='45' x2='45' y2='20'/%3E%3Cline x1='0' y1='44' x2='45' y2='65'/%3E%3C/svg%3E\")"},
			{name: 'backgroundRepeat', value: "no-repeat"},
			{name: 'backgroundPosition', value: "center"},
			{name: 'zIndex', value: "99"}
		];

		const back = document.createElement('a');
					back.className = 'backButton';
					for(const element of styles) back.style[element.name] = element.value;
					back.onclick = () => history.back();
					// back.innerText = '<';
					back.title = 'Kliknięcie w link spowoduje przejście do poprzedniej strony!';

					// back.attributeStyleMap.set('opacity', 1);

		document.querySelector('body').appendChild(back);
	}

	const shortcut = () => {
		const shortcut = document.createElement('link');
					shortcut.rel = "Shortcut icon";
					shortcut.href = "https://res.cloudinary.com/duy90jkv5/image/upload/v1526805543/shortcut.jpg";
		document.querySelector('head').appendChild(shortcut);
	}

	remove_link();
	meta_adden();
	back_button();
	shortcut();
})();