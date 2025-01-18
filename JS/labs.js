const links = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".content-container");

function reloadPage() {
    window.location.reload();
}


links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("data-target");

        sections.forEach(section => {
            section.classList.remove("active");
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active");
        }

        links.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
});



