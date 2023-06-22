// cashed element references
const projects = document.querySelectorAll<HTMLDivElement>(".hover-action");

// constants

// app's state (variables)

// event listeners
projects.forEach((project: HTMLDivElement) => {
  let sibling: HTMLDivElement | null = null;
  let hideTimeout: number | null = null;

  project.addEventListener('mouseover', (event: MouseEvent) => {
    console.dir(event.target);
    const targetElement = event.target as HTMLDivElement;
    sibling = targetElement.nextElementSibling as HTMLDivElement;
    if (sibling && sibling.style.display !== 'flex') {
      sibling.style.display = 'flex';
    }
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
  });

  project.addEventListener('mouseleave', (event: MouseEvent) => {
    console.dir(event.target);
    if (sibling && sibling.style.display === 'flex') {
      hideTimeout = window.setTimeout(() => {
        if (sibling) {
          sibling.style.display = 'none';
        }
      }, 500); // Adjust the delay as needed
    }
  });
});




// functions
