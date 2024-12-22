const menuBtn  = document.getElementById("menu-btn");
const navLinks  = document.getElementById("nav-links");
const menuBtnIcons  = menuBtn.querySelector("i");


menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcons.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
    
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open")
    menuBtnIcons.setAttribute("class", "ri-menu-3-line");
});

// header section 

const scrollRevealOptin = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOptin,
});
ScrollReveal().reveal(".header_content .section_description", {
    ...scrollRevealOptin,
    delay:500,
});
ScrollReveal().reveal(".header_content .header_btn", {
    ...scrollRevealOptin,
    delay:1000,
});
    
// about section 

ScrollReveal().reveal(".about_content h1", {
    ...scrollRevealOptin,
});
ScrollReveal().reveal(".about_content .section_description", {
    ...scrollRevealOptin,
    delay:500,
});
ScrollReveal().reveal(".about_content .about_btn", {
    ...scrollRevealOptin,
    delay:1000,
});

// Product section 

ScrollReveal().reveal(".product_card", {
    ...scrollRevealOptin,
    interval: 500,
});

// Article section 
ScrollReveal().reveal(".article_card", {
    ...scrollRevealOptin,
    interval: 500,
});
