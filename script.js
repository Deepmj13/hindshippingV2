const navBar = document.getElementById('media-navbar');
const barEl = document.getElementById('bars');
const barThree = document.getElementById('barthree');
const barTwo = document.getElementById('bartwo');
const barOne = document.getElementById('barone');
const mobileBar = document.getElementById('mobile-nav1');
const mobileBart = document.getElementById('mobile-nav2');
const mobileBarth = document.getElementById('mobile-nav3');
const mobileBarf = document.getElementById('mobile-nav4');
	barEl.onclick = () =>{
		navBar.classList.toggle('active');
		barOne.classList.toggle('active');
		barTwo.classList.toggle('active');
		barThree.classList.toggle('active');
	}
	function close(){
		navBar.classList.toggle('active');
		barOne.classList.toggle('active');
		barTwo.classList.toggle('active');
		barThree.classList.toggle('active');
	}
	mobileBar.onclick = () => {
		close()
	}
	mobileBart.onclick = () => {
		close()
	}
	mobileBarth.onclick = () => {
		close()
	}
	mobileBarf.onclick = () => {
		close()
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