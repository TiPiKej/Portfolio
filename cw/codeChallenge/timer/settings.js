(() => {

$LAB
	.script('timer.js')
		.wait(() => {
			timer.inicjuj();
		})
	.script('../../host.js')

})();