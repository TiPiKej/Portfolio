(() => {
$LAB
	.script('../../host.js')
	.wait(() => {
		if(document.querySelector('.backButton')) document.querySelector('.backButton').remove();
	})

})();