////////////////////////////////////////
////////////////////////////////////////
// Get DOM elements

const documentBody = document.querySelector("body");
const sideBtnsRight = document.querySelectorAll("#js-sideBtnsRight li");

////////////////////////////////////////
////////////////////////////////////////
// Change theme functions()

let currentTheme = "";
const defaultTheme = "theme--bw-dark";
const lsTheme = localStorage.getItem("uiTheme");

if (lsTheme != null || lsTheme != "" || lsTheme != undefined) {
  documentBody.classList.add(lsTheme);
}

// Extract the themes names from each button

const sideBtnsRightData = [];

for (let i = 0; i < sideBtnsRight.length; i++) {
  sideBtnsRightData.push(
    "theme--" + sideBtnsRight[i].getAttribute("data-theme")
  );
}

// Disable all buttons

function disableSideBtn() {
  for (let i = 0; i < sideBtnsRight.length; i++) {
    sideBtnsRight[i].classList.remove("side-btns__item--active");
  }

  documentBody.classList.remove("theme--bw-dark");
  documentBody.classList.remove("theme--bw-light");
  documentBody.classList.remove("theme--premium-dark");
}

// Activate theme

function activateTheme(btn) {
  disableSideBtn();
  btn.classList.add("side-btns__item--active");

  let theme = "theme--" + btn.getAttribute("data-theme");

  saveThemeSettings(theme);
  documentBody.classList.add(theme);
}

// Find the current theme's button index

function findBtnIndexByTheme(theme) {
  // findIndex requires a function as parameter, a bit annoying
  return sideBtnsRightData.findIndex((x) => x == theme);
}

// Save theme name to localStorage

function saveThemeSettings(theme) {
  localStorage.setItem("uiTheme", theme);
}

// Check if there was already a theme applied by the user and use it if true

function initiateTheme() {
  let btnIndex;

  if (lsTheme != null || lsTheme != "" || lsTheme != undefined) {
    currentTheme = lsTheme;
    btnIndex = findBtnIndexByTheme(currentTheme);

    // check if the theme exists, just in case
    if (btnIndex < 0) {
      // apply default theme if it doesn't exist
      btnIndex = findBtnIndexByTheme(defaultTheme);
    }

    activateTheme(sideBtnsRight[btnIndex]);
  } else {
    currentTheme = defaultTheme;
    btnIndex = findCurrentThemeBtnIndex(currentTheme);
    activateTheme(sideBtnsRight[btnIndex]);
  }
}

initiateTheme();

////////////////////////////////////////
////////////////////////////////////////
// Add "click" event listener to buttons

for (let i = 0; i < sideBtnsRight.length; i++) {
  sideBtnsRight[i].addEventListener("click", (e) => {
    let btn = e.target.parentNode;
    activateTheme(btn);
  });
}
