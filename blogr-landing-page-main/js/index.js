const connect = document.getElementById("drop-down1");
const box = document.getElementById("drop-down-connect");
const menu = document.getElementById("menu");
const closed = document.getElementById("close");
const mobilebar = document.getElementById("mobile-bar");
const after = document.getElementById("after");

let openBox = false;
let openBar = false;

connect.addEventListener("click", (e) => {
  if (openBox == false) {
    box.style.display = "block";
    openBox = true;
  } else {
    box.style.display = "none";
    openBox = false;
  }
});

menu.addEventListener("click", (e) => {
  if (openBar == false) {
    mobilebar.style.display = "block";
    openBar = true;
    closed.style.display = "block";
    menu.style.display = "none";
    after.style.visibility = "hidden";
  } else {
    mobilebar.style.display = "none";
    openBar = false;
    closed.style.display = "none";
    menu.style.display = "block";
    after.style.display = "block";
  }
});

closed.addEventListener("click", (e) => {
  if (openBar == false) {
    mobilebar.style.display = "block";
    openBar = true;
    closed.style.display = "block";
    menu.style.display = "none";
  } else {
    mobilebar.style.display = "none";
    openBar = false;
    closed.style.display = "none";
    menu.style.display = "block";
  }
});
