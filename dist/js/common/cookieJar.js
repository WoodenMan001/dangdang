/*
* @Author: ljgoh
* @Date:   2018-05-11 10:44:15
* @Last Modified by:   ljgoh
* @Last Modified time: 2018-05-11 11:05:07
*/
define([],function() {
	return {
		setCookie: function(name, value, days) {
	        const d = new Date();
	        d.setDate(d.getDate() + days)
	        document.cookie = name + " = " + encodeURI(value) + "; expires=" +d;
	    },
	    getCookie: function (name) {
	        const obj = {};
	        decodeURI(document.cookie).split(';').forEach(s => {
	            let arr = s.split("=");
	            obj[arr[0]] = arr[1];
	        })
	        return obj[name];
	    },
	    removeCookie: function (name) {
	        this.setCookie(name, '', -1)
	    }
	}
});