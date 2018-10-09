(() => {


$LAB
	.script('/js/core.min.js')
		.wait(() => {
			funkcje.meta_adds();
		})
	.script('/js/dom_elements.min.js')
		.wait(() => {
			dom.nav();
			dom.pages();
			dom.jezyki();
			funkcje.loader();
		})
	.script('/cw/host.js')
		.wait(() => {
			if(document.querySelector('.backButton')) document.querySelector('.backButton').remove();
		})
})();