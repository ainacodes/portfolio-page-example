window.onload = function () {
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 70) {
            this.document.querySelector("nav").classList.add('is-scrolling')
        } else {
            this.document.querySelector("nav").classList.remove('is-scrolling')
        }
    });

    const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

}

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
}

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
}

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}