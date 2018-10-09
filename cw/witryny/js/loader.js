let loader = (() => {
	
	const loader = document.getElementById('loader');

	let _loaded = () => {
		loader.style.opacity = 0;
		document.querySelector('body').style.overflow = 'unset';
		setTimeout(() => {
			loader.style.display = 'none';
		}, 1000);
	}

	return{
		loaded : _loaded
	}

})();