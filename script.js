// ScrollMagic for Parallax Effect
const controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: "#hero",
    triggerHook: 0.5,
    duration: "100%"
})
.setTween("#hero", { backgroundPositionY: "50%" })
.addTo(controller);

// Three.js for 3D Cube
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector("#hero").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x007BFF });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Typed.js for Dynamic Typing Animation
new Typed("#hero h2", {
    strings: ["Welcome to my Portfolio", "Bringing Ideas to Life", "Web Development Extraordinaire"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// GSAP for Hover Animations
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        gsap.to(project, { scale: 1.1, duration: 0.3 });
    });
    project.addEventListener('mouseleave', () => {
        gsap.to(project, { scale: 1, duration: 0.3 });
    });
});

// Intersection Observer for Smooth Section Reveal
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});