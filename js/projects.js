////////////////////////////////////////
////////////////////////////////////////
// Select DOM elements

const projectsListFeatured = document.querySelector("#js-projectsFeatured")
const projectsListOthers = document.querySelector("#js-projectsOthers")
const projectsListUx = document.querySelector("#js-projectsUx")

////////////////////////////////////////
////////////////////////////////////////
// Projects icons

const projectsIcons = {
  launch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>`,
  info1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          `,
}

////////////////////////////////////////
////////////////////////////////////////
// Inject projects: Featured

function injectProjectsFeatured() {
  let i

  for (let i = Projects.featured.length - 1; i > -1; i--) {
    let prj = document.createElement("div")
    prj.classList.add("project")
    prj.setAttribute("data-prj-index", i)
    prj.setAttribute("data-prj-type", Projects.featured[i].type)
    prj.setAttribute("data-prj-code", Projects.featured[i].code)

    let prjTags = document.createElement("ul")
    prjTags.classList.add("project__tags")

    for (let j = 0; j < Projects.featured[i].tags.length; j++) {
      let tag = document.createElement("li")
      tag.innerHTML = Projects.featured[i].tags[j]
      prjTags.appendChild(tag)
    }

    prj.innerHTML = `
      <div class="project__img">
        <img src="${Projects.featured[i].thumbnail}" alt="project image" />
      </div>

      <div class="project__details">
        <div class="project__date">${Projects.featured[i].date}</div>
        <div class="project__title">${Projects.featured[i].name}</div>
        <div class="project__desc">${Projects.featured[i].descShort}</div>
        <ul class="project__tags">${prjTags.innerHTML}</ul>
      </div>
    `

    projectsListFeatured.appendChild(prj)
  }
}

injectProjectsFeatured()

////////////////////////////////////////
////////////////////////////////////////
// Inject projects: Others

function injectProjectsOthers() {
  let i

  for (let i = Projects.others.length - 1; i > -1; i--) {
    let prj = document.createElement("div")
    prj.classList.add("project")
    prj.setAttribute("data-prj-index", i)
    prj.setAttribute("data-prj-type", Projects.others[i].type)
    prj.setAttribute("data-prj-code", Projects.others[i].code)

    // Make project span 2 columns if widowed
    if (i == 0 && Projects.others.length % 2 != 0) {
      prj.classList.add("project--widowed")
    }

    prj.innerHTML = `
      <div class="project__img">
        <img src="${Projects.others[i].thumbnail}" alt="" />
      </div>
      <div class="project__details">
        <div class="project__date">${Projects.others[i].date}</div>
        <div class="project__title">${Projects.others[i].name}</div>
        <div class="project__btn">${projectsIcons.info1}</div>
      </div>
    `

    projectsListOthers.appendChild(prj)
  }
}

injectProjectsOthers()

////////////////////////////////////////
////////////////////////////////////////
// Inject projects: UX

function injectProjectsUx() {
  for (let i = Projects.ux.length - 1; i > -1; i--) {
    let prj = document.createElement("div")
    prj.classList.add("project")
    prj.setAttribute("data-prj-index", i)
    prj.setAttribute("data-prj-type", Projects.ux[i].type)
    prj.setAttribute("data-prj-code", Projects.ux[i].code)

    // Make project span 2 columns if widowed
    // if (i == 0 && Projects.others.length % 2 != 0) {

    //   prj.classList.add("project--widowed")
    // }

    prj.innerHTML = `
      <div class="project__img">
        <img src="${Projects.ux[i].thumbnail}" alt="" />
      </div>
      <div class="project__details">
        <div class="project__date">${Projects.ux[i].date}</div>
        <div class="project__title">${Projects.ux[i].name}</div>
        <div class="project__btn">${projectsIcons.info1}</div>
      </div>
    `

    projectsListUx.appendChild(prj)
  }
}

injectProjectsUx()
