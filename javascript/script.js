// counter start

// dark mode

let body = document.querySelector("body");
let sun = document.querySelector(".fa-sun");
sun.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// scroll top

let btn = document.querySelector(".fa-arrow-circle-up");
btn.addEventListener("click", () => {
  scrollTo(0, 0);
});

// counter

let counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updatecounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 250;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updatecounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updatecounter();
});
