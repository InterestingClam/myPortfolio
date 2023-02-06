// JavaScript Document


/*
      Student Name:Kaulin Brault
	  File Name: script.js
	  Date: 03/17/2022
*/

//hamburger funtion
function hamburger () {
	var menu = document.getElementsById("menu-links");
	var logo = document.getElementById("ffc-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		//run this code if both are TRUE
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		//Run this code if both are FALSEn
		menu.style.display = "block";
		logo.style.display = "none";
	}
	
}













