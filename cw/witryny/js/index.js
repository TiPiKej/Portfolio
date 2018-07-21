(() => {

$LAB
	.script('js/films.min.js')
		.wait(() => {
			filmy.wstaw();
		})
	.script('js/loader.min.js')
		.wait(() => {
			loader.loaded();
		})
	.script('js/menu.min.js')
		.wait(() =>{
			menu.kontakt.on(true);
		})
	.script('../../host.js')

})();