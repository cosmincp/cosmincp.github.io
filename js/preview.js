/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Get DOM elements

const body = document.querySelector("#body")
const previewOverlay = document.querySelector("#js-previewOverlay")
const previewWindow = previewOverlay.querySelector(".op__window")
const allProjectsPreviews = document.querySelectorAll(".project .project__img")

const opHeaderTitle = previewWindow.querySelector(".op__header-name .label")
const opLink = previewWindow.querySelector(".op__header-link .link")
const opSlider = previewWindow.querySelector(".op__slider")

const opTitle = previewWindow.querySelector(".op__title")
const opDesc = previewWindow.querySelector(".op__desc")
const opDate = previewWindow.querySelector(".op__date span")

const opLinks = previewWindow.querySelector(".op__info .item--links .info")
const opLanguages = previewWindow.querySelector(".op__info .item--lang .info")
const opTools = previewWindow.querySelector(".op__info .item--tools .info")

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Initialize slick

// IMPORTANT: Load slick before rendering anything on the DOM!

$(".single-item").not(".slick-initialized").slick({
  dots: true,
  infinite: true,
  speed: 200,
  adaptiveHeight: true,
  initialSlide: 1,
  slidesToShow: 1,
})

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Overlay things

function closePreviewOverlay() {
  previewOverlay.classList.remove("op__overlay--visible")
  body.classList.remove("no-scroll")
}

function openPreviewOverlay() {
  body.classList.add("no-scroll")
  previewOverlay.classList.add("op__overlay--visible")
}

previewOverlay.addEventListener("mousedown", closeProject)

previewOverlay
  .querySelector(".op__window")
  .addEventListener("mousedown", (event) => {
    event.stopPropagation()
  })

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Open/Close current project preview

function closeProject() {
  closePreviewOverlay()
}

function openProject(target) {
  injectProjectSlides(target)
  injectProject(target)

  $(".single-item").slick("slickGoTo", 1, true)

  // setTimeout(function () {
  //   $(".single-item").slick("slickGoTo", 1, true)
  // }, 100)

  setTimeout(function () {
    openPreviewOverlay()
    previewOverlay.scrollTop = 0
  }, 200)

  setTimeout(function () {
    opSlider.querySelector(".slick-prev").click()
  }, 400)
}

function injectProject(code) {
  // Find what project to inject

  let domProject = document.querySelector(`[data-prj-code="${code}"]`)
  let prjCode = code
  let prjType = domProject.getAttribute("data-prj-type")
  let prjIndex = domProject.getAttribute("data-prj-index")

  // Get data from JSON/Object file
  // EXAMPLE: Projects["featured"][0]["name"]

  let name = Projects[prjType][prjIndex]["name"]
  let url0 = Projects[prjType][prjIndex]["links"][0][0]
  let url1 = Projects[prjType][prjIndex]["links"][0][1]

  let desc = Projects[prjType][prjIndex]["descLong"]
  let date = Projects[prjType][prjIndex]["date"]

  let allUrls = Projects[prjType][prjIndex]["links"]
  let tech = Projects[prjType][prjIndex]["tech"]

  // Set data to user's DOM

  opHeaderTitle.innerText = name
  opLink.innerHTML = url0
  opLink.parentElement.setAttribute("href", url1)

  opTitle.innerText = name
  opDesc.innerHTML = desc
  opDate.innerText = date

  // empty all previous links before appending current project links
  opLinks.innerHTML = ""

  for (let i = 0; i < allUrls.length; i++) {
    let newUrl = document.createElement("a")
    newUrl.setAttribute("target", "_blank")
    newUrl.setAttribute("href", allUrls[i][1])
    newUrl.innerText = allUrls[i][0]

    opLinks.appendChild(newUrl)
  }

  // Set languages, if it's a programming project; otherwise hide it
  if (prjType == "featured" || prjType == "others") {
    // It's programming project
    opLanguages.parentElement.classList.remove("item--hidden")

    let lang = Projects[prjType][prjIndex]["lang"]
    let langs = ""

    for (let i = 0; i < lang.length; i++) {
      if (i == lang.length - 1) {
        langs = langs + lang[i]
      } else {
        langs = langs + lang[i] + ", "
      }
    }

    opLanguages.innerText = langs
  } else {
    // It's UX project, hide Programming languages category
    opLanguages.parentElement.classList.add("item--hidden")
  }

  let tools = ""

  for (let i = 0; i < tech.length; i++) {
    if (i == tech.length - 1) {
      tools = tools + tech[i]
    } else {
      tools = tools + tech[i] + ", "
    }
  }

  opTools.innerText = tools

  // Set techonologies and tools used
}

function clearSlides() {
  const slick = $(".single-item").slick("getSlick")

  if (slick) {
    let slidesCounter = slick.slideCount

    if (slidesCounter > 0) {
      while (slidesCounter > 0) {
        $(".single-item").slick("slickRemove", slidesCounter - 1)
        slidesCounter--
      }
    }
  }
}

function injectProjectSlides(code) {
  // Clear previous opened stuff
  clearSlides()

  // Find what project to be injected
  let domProject = document.querySelector(`[data-prj-code="${code}"]`)
  let prjCode = code
  let prjType = domProject.getAttribute("data-prj-type")
  let prjIndex = domProject.getAttribute("data-prj-index")

  let prjGallery = Projects[prjType][prjIndex]["gallery"]

  for (let i = 0; i < prjGallery.length; i++) {
    let template = `
    <div>
      <img src="${prjGallery[i]}" alt="slide" />
    </div>
    `

    $(".single-item").slick("slickAdd", template)
  }
}

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Open project

// Add "click" event listener to all projects previews

for (i = 0; i < allProjectsPreviews.length; i++) {
  let prjCode = allProjectsPreviews[i].parentElement.getAttribute(
    "data-prj-code"
  )

  allProjectsPreviews[i].addEventListener("click", () => {
    openProject(prjCode)
  })

  allProjectsPreviews[i].parentElement
    .querySelector(".project__details")
    .addEventListener("click", () => {
      openProject(prjCode)
    })
}

// Inject clicked project's data into modal

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// OP btns events

const previewCloseBtnHeader = document.querySelector(".op__header-btns")
const previewCloseBtnFooter = document.querySelector(".op__btns")

previewCloseBtnHeader.addEventListener("click", closeProject)
previewCloseBtnFooter.addEventListener("click", closeProject)
