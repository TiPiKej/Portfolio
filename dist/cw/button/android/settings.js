(() => {
$LAB
	.script('https://code.jquery.com/jquery-3.2.1.min.js').wait()
	.script('button_z_jquery.js')
	.script('linki_na_cala_strone.js')
		.wait(
			() => {
				$('a').on({
					'click': e => {
						e.preventDefault();
					}
				});
			}
		)
	.script('../../host.js')
})();