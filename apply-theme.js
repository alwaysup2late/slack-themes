// ==UserScript==
// @name          Neon Slack without glow
// @namespace     http://userstyles.org
// @description	  This is a version of the Neon slack theme from: https://userstyles.org/styles/124658/neon-slack
// @author        magitronic82
// @homepage      https://userstyles.org/styles/127836
// @run-at        document-start
// @version       0.20170322144204
// ==/UserScript==
document.addEventListener("DOMContentLoaded", function() {
	var css = ['', ''].join("\n");
	if (typeof GM_addStyle != "undefined") {
		GM_addStyle(css);
	} else if (typeof PRO_addStyle != "undefined") {
		PRO_addStyle(css);
	} else if (typeof addStyle != "undefined") {
		addStyle(css);
	} else {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		var heads = document.getElementsByTagName("head");
		if (heads.length > 0) {
			heads[0].appendChild(node); 
		} else {
			// no head yet, stick it whereever
			document.documentElement.appendChild(node);
		}
	}
});
