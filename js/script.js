
const headerBurger = document.querySelector('.header__burger');
function burgerActive() {
	headerBurger.classList.toggle('header__burger-active');
}
function menuActive() {
	document.querySelector('.menu__body').classList.toggle('header-menu-active');
}

document.addEventListener('click', function (e) {
	if (e.target == headerBurger) {
		burgerActive();
		menuActive();
	}
})

const header = document.querySelector('header');
let pageY = pageYOffset;
window.addEventListener('scroll', function () {
	if ((pageYOffset > 600) & (!headerBurger.classList.contains('header__burger-active'))) {
		if (pageY > pageYOffset) {
			header.classList.remove('_header-hide');
		} else {
			header.classList.add('_header-hide');
		}
		pageY = pageYOffset;
	}
})
