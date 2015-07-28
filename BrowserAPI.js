(function($) {
	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
	var isIE = "ActiveXObject" in window;
	
	$.ieVersion = function () {
	    var ua = window.navigator.userAgent
	    var msie = ua.indexOf("MSIE ")
	    if (msie > 0)      
	        return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)))
	    else                 
	        return 9999 //Not able to get the version of IE

	};
	$.msie9AndAbove = function() {
            var ua = navigator.userAgent;
            if (ua.indexOf('Trident/5.0') != -1 || ua.indexOf('Trident/6.0') != -1 || ua.indexOf('Trident/7.0') != -1)
                return true;
            else
                return false;
    };
     $.msie9 = function() {
        var ua = navigator.userAgent;
        if (ua.indexOf('Trident/5.0') != -1)
            return true;
        else
            return false;
     };
     $.msie6 = function () {
         return $.ieVersion() == 6;
     };
     $.isChrome = function () {
         return isChrome;
     };
     $.isSafari = function () {
         return isSafari;
     };
     $.isIE = function () {
         return isIE;
     };
     $.isMozilla = function () {
         return isFirefox;
     };
})(jQuery);
