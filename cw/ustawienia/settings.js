(()=>{

$LAB
	.script('https://code.jquery.com/jquery-3.2.1.min.js').wait(
		() => {

			// if(sessionStorage.getItem('u_bu') == null) location.href = '../';

		}
	)
	.wait(() => {
		let title = document.getElementsByClassName('title');
		Array.from(title).forEach(e => {
			e.onclick = () => {
				if(e.className == 'title open') e.className = 'title';
				else e.className = 'title open';
			}
		});
	})
	.script('../host.js')

})();