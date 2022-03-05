//SLIDING ANIMATIONS

//Cards sliding in from below
const cards = document.querySelectorAll(".card");
const aboutImg = document.querySelector(".about-img");
const locImg = document.querySelector(".loc-img");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
},
{
  rootMargin: "50px",
});

cards.forEach(card => {
  observer.observe(card)
});

observer.observe(aboutImg);
observer.observe(locImg);