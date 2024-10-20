
gsap.registerPlugin(ScrollTrigger);

const logoWrappers = document.querySelectorAll(".logos-section_wrapper");


const cloneLogos = (wrapper) => {
    const logos = wrapper.querySelectorAll(".logos-section_containers");
    logos.forEach((logo) => {
        const clonedLogo = logo.cloneNode(true);
        wrapper.appendChild(clonedLogo); 
    });
};


logoWrappers.forEach(wrapper => {
    cloneLogos(wrapper);
});


logoWrappers.forEach((wrapper) => {
    gsap.to(wrapper, {
        xPercent: -100,
        repeat: -1,
        ease: "linear",
        duration: 30, 
    });
});
