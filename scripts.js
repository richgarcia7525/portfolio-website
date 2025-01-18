// Typed.js for Dynamic Typing Animation in Hero Header
new Typed("#typed-header-text", {
    strings: [
        "Unleashing Creativity Through Code."
    ],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
});

// Typed.js for Animated Intro in Footer
new Typed("#typed-footer-text", {
    strings: [
        "I’m a Web Developer.",
        "I bring ideas to life with code.",
        "Let's build something amazing together."
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Three.js for 3D Rotating Shapes
const skillScene = new THREE.Scene();
const skillsCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const skillsRenderer = new THREE.WebGLRenderer({ alpha: true });
skillsRenderer.setSize(window.innerWidth, 600);
document.querySelector('#skills-animation').appendChild(skillsRenderer.domElement);

// Adjust camera position and update projection matrix
skillsCamera.position.z = 12; // Move camera slightly back
skillsCamera.updateProjectionMatrix(); // Update projection matrix after position changes

const colors = [0xff9900, 0x0ABAB5, 0x884513, 0x0056b3];
const positions = [-3, -1, 1, 3];

// Create larger rotating cubes
positions.forEach((x, i) => {
    const geometry = new THREE.BoxGeometry(4, 4, 4); // Larger size
    const material = new THREE.MeshBasicMaterial({ color: colors[i] });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(x * 6, 0, -5);
    skillScene.add(cube);
});

// Animate the cubes
function animateSkills() {
    requestAnimationFrame(animateSkills);
    skillScene.children.forEach((child) => {
        child.rotation.x += 0.01;
        child.rotation.y += 0.01;
    });
    skillsRenderer.render(skillScene, skillsCamera);
}
animateSkills();

// Confetti Effect and Form Submission Handler
document.querySelector("#contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Confetti effect
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0ABAB5', '#884513', '#FFFFFF']
    });

    // Display success message
    const successMessage = document.querySelector("#success-message");
    successMessage.style.display = "block";

    // Clear the form
    document.querySelector("#contact-form").reset();

    // Hide the success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 5000);
});

// Selecting the form element
const form = document.querySelector("#contact-form");

// Adding an event listener to the form's submit event
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Retrieving form data
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  try {
    // Sending the form data to the backend using the Fetch API
    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (data.success) {
      // Displaying a success message with confetti
      alert("Thank you! Your message has been sent.");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0ABAB5", "#884513"],
      });

      // Optionally reset the form fields after successful submission
      form.reset();
    } else {
      alert("Failed to send your message. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("An error occurred. Please try again later.");
  }
});

async function submitForm(event) {
    event.preventDefault();
    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
        } else {
            alert(data.message); // Display error message from backend
        }
    } catch (error) {
        alert('An unexpected error occurred. Please try again later.');
    }
}
