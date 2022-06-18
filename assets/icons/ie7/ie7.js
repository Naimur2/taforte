/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-search': '&#xe92f;',
		'icon-add': '&#xe900;',
		'icon-add-user': '&#xe901;',
		'icon-apple': '&#xe902;',
		'icon-bin': '&#xe903;',
		'icon-camera': '&#xe904;',
		'icon-chart': '&#xe905;',
		'icon-checks': '&#xe906;',
		'icon-chevron-left': '&#xe907;',
		'icon-chevron-right': '&#xe908;',
		'icon-copy': '&#xe909;',
		'icon-edit': '&#xe90a;',
		'icon-edit-message': '&#xe90b;',
		'icon-exit': '&#xe90c;',
		'icon-exit-2': '&#xe90d;',
		'icon-facebook': '&#xe90e;',
		'icon-gear': '&#xe910;',
		'icon-google': '&#xe911;',
		'icon-hamburger': '&#xe915;',
		'icon-headphone': '&#xe916;',
		'icon-home': '&#xe917;',
		'icon-home-fill': '&#xe918;',
		'icon-link': '&#xe919;',
		'icon-location': '&#xe91a;',
		'icon-lock': '&#xe91b;',
		'icon-menu': '&#xe91c;',
		'icon-notification': '&#xe91d;',
		'icon-notification-fill': '&#xe91e;',
		'icon-pen': '&#xe91f;',
		'icon-people': '&#xe920;',
		'icon-peoples': '&#xe921;',
		'icon-person': '&#xe922;',
		'icon-scan': '&#xe923;',
		'icon-barcode': '&#xe924;',
		'icon-share': '&#xe925;',
		'icon-star': '&#xe926;',
		'icon-telephone': '&#xe927;',
		'icon-telephone-fill': '&#xe928;',
		'icon-user': '&#xe929;',
		'icon-user-fill': '&#xe92a;',
		'icon-eye': '&#xe92b;',
		'icon-wallet': '&#xe92c;',
		'icon-eye-close': '&#xe92d;',
		'icon-zoom-in': '&#xe92e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
