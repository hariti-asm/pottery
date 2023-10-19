let artists = document.querySelector(".artists .list");
let items = document.querySelectorAll(".artists .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".artists .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadartists();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadartists();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 1000);
function reloadartists() {
  artists.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".artists .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 1000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadartists();
  });
});
window.onresize = function (event) {
  reloadartists();
};
