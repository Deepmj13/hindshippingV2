const navBar = document.getElementById('media-navbar');
const barEl = document.getElementById('bars');
const barThree = document.getElementById('barthree');
const barTwo = document.getElementById('bartwo');
const barOne = document.getElementById('barone');

	barEl.onclick = () =>{
		navBar.classList.toggle('active');
		barOne.classList.toggle('active');
		barTwo.classList.toggle('active');
		barThree.classList.toggle('active');
	}

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").classList.remove("navbar-hidden");
  } else {
    document.querySelector(".navbar").classList.add("navbar-hidden");
  }
  prevScrollpos = currentScrollPos;
}
