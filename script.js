
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active'); 
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');
}

const fill = document.getElementById('scrollFill');
const label = document.getElementById('scrollLabel');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = Math.round((scrollTop / docHeight) * 100);

  fill.style.height = progress + '%';
  label.textContent = progress + '%';
});


