// cashed element references
var projects = document.querySelectorAll(".hover-action");
var projectInfo = document.querySelectorAll(".project-info");
var body = document.querySelector('body');
// constants
// app's state (variables)
// event listeners
projects.forEach(function (project) {
    var sibling = null;
    project.addEventListener('mouseover', function (event) {
        console.dir(event.target);
        var targetElement = event.target;
        sibling = targetElement.nextElementSibling;
        if (sibling && sibling.style.display !== 'flex') {
            sibling.style.display = 'flex';
        }
    });
});
// functions
