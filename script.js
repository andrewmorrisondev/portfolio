// cashed element references
var projects = document.querySelectorAll(".hover-action");
// constants
// app's state (variables)
// event listeners
projects.forEach(function (project) {
    var sibling = null;
    var hideTimeout = null;
    project.addEventListener('mouseover', function (event) {
        console.dir(event.target);
        var targetElement = event.target;
        sibling = targetElement.nextElementSibling;
        if (sibling && sibling.style.display !== 'flex') {
            sibling.style.display = 'flex';
        }
        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }
    });
    project.addEventListener('mouseleave', function (event) {
        console.dir(event.target);
        if (sibling && sibling.style.display === 'flex') {
            hideTimeout = window.setTimeout(function () {
                if (sibling) {
                    sibling.style.display = 'none';
                }
            }, 500); // Adjust the delay as needed
        }
    });
});
// functions
