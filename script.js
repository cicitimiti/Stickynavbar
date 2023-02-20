const navBarEl = document.querySelector(".navbar");
const btmContEl = document.querySelector(".bottom-container");

console.log(navBarEl.offsetHeight);
console.log(btmContEl.offsetTop);

window.addEventListener("scroll", ()=>{
    if (window.scrollY > btmContEl.offsetTop - navBarEl.offsetHeight - 50) {
        navBarEl.classList.add("active")
    }else {
        navBarEl.classList.remove("active")
    }
})