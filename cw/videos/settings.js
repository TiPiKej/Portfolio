(() => {

$LAB
	.script('api.js')
		.wait(() =>  filmy.wypisz())
	.script('../host.js')

})();