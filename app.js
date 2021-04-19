const tl = gsap.timeline({ defaults: { ease: "power1.out" } });



//tl.to(".heading", { y: "0%", duration: 1, stagger: 0.25 });

//tl.to(".landing-img", { y: "-100%", duration: 1.5, delay: 0.5 });

tl.fromTo(".heading", { opacity: -1 }, { opacity: 1, duration: 5,});

gsap.from(".landing-img", {duration: 2, x: 300, opacity: 0, scale: 0.5, delay: 0.5});

