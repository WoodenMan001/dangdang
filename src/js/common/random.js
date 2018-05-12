/*
* @Author: ljgoh
* @Date:   2018-05-11 09:54:51
* @Last Modified by:   ljgoh
* @Last Modified time: 2018-05-11 10:30:02
*/
define([],function(){
	return {
		num: [1,2,3,4,5,6,7,8,9],
		upper:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
		lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
		//随机数
		getNum: function (min,max) {
	       return Math.round(Math.random() * (max - min) + min);
		},
		//数字，大小写字母随机
		getCode: function(){
			let codeArr = this.num.concat(this.upper,this.lower);
			let index =  this.getNum(0,codeArr.length-1);
			return codeArr[index];
		},
		//随机颜色
		getColor: function() {
	       return '#'+((Math.random()*0x1000000<<0).toString(16)).padStart(6,'0').slice(-6);
		},
		//随机颜色 rgb
		getRgbColor: function() {
			return "rgb(" + this.getNum(0,255) 
						+ ", " + getNum(0,255) 
						+ ", " + getNum(0,255) + ")";
		}
	}
});