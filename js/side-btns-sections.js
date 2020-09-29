////////////////////////////////////////
////////////////////////////////////////
// Get DOM elements
const sideBtnsLeft = document.querySelectorAll("#js-sideBtnsLeft li")

const sections = document.querySelectorAll("section")
const section0 = document.querySelector("#s0")
const section1 = document.querySelector("#s1")
const section2 = document.querySelector("#s2")
const section3 = document.querySelector("#s3")
const section4 = document.querySelector("#s4")
const section5 = document.querySelector("#s5")

////////////////////////////////////////
////////////////////////////////////////
// Smooth anchor scroll
$(document).ready(function () {
  $('a[data-function="smooth-scroll"]').on("click", function (e) {
    e.preventDefault()

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        800,
        "swing"
      )
  })
})

////////////////////////////////////////
////////////////////////////////////////
// Section observer

// Observer doing the magic
function sectionsObserverDotsAdd(sectionIndex) {
  sideBtnsLeft[sectionIndex].classList.add("side-btns__item--active")
}

function sectionsObserverDotsClear(sectionIndex) {
  sideBtnsLeft[sectionIndex].classList.remove("side-btns__item--active")
}

function sectionsObserverDotsClearAll() {
  for (let i = 0; i < sideBtnsLeft.length; i++) {
    sideBtnsLeft[i].classList.remove("side-btns__item--active")
  }
}

let observerTracker = []

// Observer options
const sectionsObserverOptions = {
  root: null,
  rootMargin: "-40% 0px -50% 0px",
  threshold: "0",
}

// Observer callback
const sectionsObserverCallback = (entries, sectionsObserver) => {
  {
    entries.forEach((entry) => {
      let sectionIndex = entry.target.id.slice(1, 2)

      if (entry.isIntersecting) {
        if (observerTracker.indexOf(sectionIndex) < 0) {
          observerTracker.push(sectionIndex)
          sectionsObserverDotsClearAll()
          sectionsObserverDotsAdd(sectionIndex)
        }
      } else {
        observerTracker.splice(observerTracker.indexOf(sectionIndex), 1)
        sectionsObserverDotsClear(sectionIndex)
      }

      // console.log(observerTracker)
    })
  }
}

// Initiate observer
const sectionsObserver = new IntersectionObserver(
  sectionsObserverCallback,
  sectionsObserverOptions
)

// Start observing items
sections.forEach((section) => {
  sectionsObserver.observe(section)
})

// sectionsObserver.observe(section0)
// sectionsObserver.observe(section1)
// sectionsObserver.observe(section2)
// sectionsObserver.observe(section3)
// sectionsObserver.observe(section4)
// sectionsObserver.observe(section5)
