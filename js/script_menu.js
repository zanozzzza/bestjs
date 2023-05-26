// Важно, чтобы было постороено дом дерево и ничего не сломалось
window.addEventListener("DOMContentLoaded", function () {
	"use strict";

	//======================//
	//Создание бургер меню
	//получаем иконку бургер меню
	const hamb = document.querySelector("#hamb");
	const popup = document.querySelector("#popup");
	// Глубокое клонирование со всем содержимым
	const menu = document.querySelector("#menu").cloneNode(1);
	// const body = document.body;
	
	hamb.addEventListener("click", hambHandler);

	function hambHandler(e) {
		popup.classList.toggle('open');
		renderPopup();
		// body.classList.toggle('noscroll');
	}
	function renderPopup() {
		popup.appendChild(menu);
	}

	//======================//
});
