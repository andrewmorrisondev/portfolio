// cashed element references
const projects = document.querySelectorAll<HTMLDivElement>(".hover-action")
const projectInfo = document.querySelectorAll<HTMLDivElement>(".project-info")
const body = document.querySelector('body') as HTMLBodyElement

// constants

// app's state (variables)

// event listeners
projects.forEach((project: HTMLDivElement) => {
  let sibling: HTMLDivElement | null = null;

  project.addEventListener('mouseover', (event: MouseEvent) => {
    console.dir(event.target)
    const targetElement = event.target as HTMLDivElement
    sibling = targetElement.nextElementSibling as HTMLDivElement
    if (sibling && sibling.style.display !== 'flex') {
      sibling.style.display = 'flex'
    }
  })
})




// functions
