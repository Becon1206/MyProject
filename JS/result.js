document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.querySelector(".main-content");

    // Slider Section
    const slider = document.createElement("div");
    slider.className = "slider";

    const images = [
        "../IMG/2.webp",
        "../IMG/10.webp"
    ];

    let currentIndex = 0;

    const sliderImage = document.createElement("img");
    sliderImage.src = images[currentIndex];
    sliderImage.alt = "Jewelry " + (currentIndex + 1);
    sliderImage.style.height = "50%";
    slider.appendChild(sliderImage);

    const leftArrow = document.createElement("button");
    leftArrow.className = "arrow left";
    leftArrow.innerHTML = "&#8249;";
    leftArrow.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        sliderImage.src = images[currentIndex];
        sliderImage.alt = "Jewelry " + (currentIndex + 1);
    });
    slider.appendChild(leftArrow);

    const rightArrow = document.createElement("button");
    rightArrow.className = "arrow right";
    rightArrow.innerHTML = "&#8250;";
    rightArrow.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        sliderImage.src = images[currentIndex];
        sliderImage.alt = "Jewelry " + (currentIndex + 1);
    });
    slider.appendChild(rightArrow);

    mainContent.appendChild(slider);

    // Categories Section
    const h3Categories = document.createElement("h3");
    h3Categories.textContent = "Results of the exercise";
    mainContent.appendChild(h3Categories);

    const svgIcons = {
        home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"/></svg>`,
        requirement: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3 2.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h5.25a.75.75 0 0 1 0 1.5H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.25a.75.75 0 0 1-1.5 0V3a.5.5 0 0 0-.5-.5zm12.28 8.72a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.97-1.97a.75.75 0 0 1 1.06 0M4.75 4a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8m.75 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>`,
        design: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m17.674 11.408l-1.905 5.716a.6.6 0 0 1-.398.385L3.693 20.981a.6.6 0 0 1-.74-.765L6.745 8.842a.6.6 0 0 1 .34-.365l5.387-2.218a.6.6 0 0 1 .653.13l4.404 4.405a.6.6 0 0 1 .145.614M3.296 20.602l6.364-6.364"/><path fill="currentColor" d="m18.403 3.182l2.364 2.364a1.846 1.846 0 1 1-2.61 2.61l-2.365-2.364a1.846 1.846 0 0 1 2.61-2.61"/><path d="M11.781 12.116a1.5 1.5 0 1 0-2.121 2.121a1.5 1.5 0 0 0 2.121-2.121"/></g></svg>`,
        blog: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 5v14H5V5zm2-2H3v18h18zm-4 14H7v-1h10zm0-2H7v-1h10zm0-3H7V7h10z"/></svg>`,
        contact: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M11 2H4V0H3v2H1.5A1.5 1.5 0 0 0 0 3.5v8A1.5 1.5 0 0 0 1.5 13h12a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 13.5 2H12V0h-1zM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-.618 4.618a2.927 2.927 0 0 1 5.236 0l.33.658A.5.5 0 0 1 7.5 12h-5a.5.5 0 0 1-.447-.724zM9 6h3V5H9zm0 3h3V8H9z" clip-rule="evenodd"/><path fill="currentColor" d="M15 14v1H0v-1z"/></svg>`,
        login: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1.293 6.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L13.586 13H5a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414" clip-rule="evenodd"/></svg>`,
        register: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4"/></svg>`,
        forgot: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1a5 5 0 0 0-5 5v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5m0 1.9c1.71 0 3.1 1.39 3.1 3.1v2H8.9V6c0-1.71 1.39-3.1 3.1-3.1m.19 7.6c.94 0 1.69.21 2.23.62q.81.63.81 1.68c0 .44-.15.83-.44 1.2c-.29.36-.67.64-1.13.85c-.26.15-.43.3-.52.47c-.09.18-.14.4-.14.68h-2c0-.5.1-.84.29-1.08c.21-.24.55-.52 1.07-.84c.26-.14.47-.32.64-.54c.14-.21.22-.46.22-.74c0-.3-.09-.52-.27-.69c-.18-.18-.45-.26-.76-.26c-.27 0-.49.07-.69.21c-.16.14-.26.35-.26.63H9.27c-.05-.69.23-1.29.78-1.65c.54-.36 1.25-.54 2.14-.54M11 17h2v2h-2z"/></svg>`

    };

    const categoryItems = [
        { icon: "home", text: "Home", link: "https://insanegroup.github.io/GroupWeb/index.html" },
        { icon: "requirement", text: "Requirement", link: "https://insanegroup.github.io/GroupWeb/HTML/project.html" },
        { icon: "design", text: "Design", link: "https://insanegroup.github.io/GroupWeb/HTML/project.html" },
        { icon: "blog", text: "Blog", link: "https://insanegroup.github.io/WebProject/src/html/blog.html" },
        { icon: "contact", text: "Contact", link: "https://insanegroup.github.io/WebProject/src/html/contact.html" },
        { icon: "login", text: "Login", link: "https://insanegroup.github.io/WebProject/src/html/login.html" },
        { icon: "register", text: "Register", link: "https://insanegroup.github.io/WebProject/src/html/login.html" },
        { icon: "forgot", text: "Forgot Password", link: "https://insanegroup.github.io/WebProject/src/html/forgot.html" }
    ];

    const categories = document.createElement("div");
    categories.className = "categories";

    categoryItems.forEach(item => {
        const category = document.createElement("div");
        category.className = "category";

        const button = document.createElement("button");
        button.className = "category-button";
        button.type = "button";

        const iconWrapper = document.createElement("div");
        iconWrapper.className = "icon";
        iconWrapper.innerHTML = svgIcons[item.icon];

        const text = document.createElement("p");
        text.textContent = item.text;

        button.appendChild(iconWrapper);
        button.appendChild(text);

        button.addEventListener("click", function () {
            const iframe = document.querySelector("iframe");
            if (iframe) {
                iframe.src = item.link;
            }
        });

        category.appendChild(button);
        categories.appendChild(category);
    });

    mainContent.appendChild(categories);

    const iframeContainer = document.createElement("div");
    iframeContainer.className = "iframe-container";
    const iframe = document.createElement("iframe");
    iframe.src = "";
    iframe.frameBorder = "0";
    iframe.style.width = "100%";
    iframe.style.height = "800px";
    iframeContainer.appendChild(iframe);
    mainContent.appendChild(iframeContainer);



});
