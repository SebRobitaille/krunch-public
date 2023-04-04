let viewportHeight = window.innerHeight
let triggerHeight = viewportHeight / 4
let heroSection
let sections
let navBar = document.getElementById("nav")
window.addEventListener(
  "load",
  (event) => {
    heroSection = document.getElementById("top")
    sections = document.querySelectorAll("section")

    createObserver()
  },
  false
)

function createObserver() {
  let observer

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  }

  observer = new IntersectionObserver(handleIntersect, options)
  observer.observe(heroSection)
  sections.forEach((section) => {
    observer.observe(section)
  })
}

function buildThresholdList() {
  let thresholds = []
  let numSteps = 5

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps
    thresholds.push(ratio)
  }

  thresholds.push(0)
  return thresholds
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.boundingClientRect.y < 0) {
      entry.target.classList.add("active-section")
      toggleStickyNav()
      activeLink()
      // lastActive()
    } else {
      entry.target.classList.remove("active-section")
    }
  })
}

function toggleStickyNav() {
  if (!heroSection.classList.contains("active-section")) {
    navBar.classList.add("fixed-nav")
  } else {
    navBar.classList.remove("fixed-nav")
  }
}

function activeLink() {
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    let linkHref = link.getAttribute("href")
    let idSearch = linkHref.slice(1, linkHref.length)
    let section = document.getElementById(`${idSearch}`)
    if (section.classList.contains("active-section")) {
      link.classList.add("active-link")
    } else {
      link.classList.remove("active-link")
    }
  })
}

// function lastActive() {
//   const actives = document.querySelectorAll(".active-section")
//   const activesArray = Array.prototype.slice.call(actives)
//   console.log(activesArray)
// }
