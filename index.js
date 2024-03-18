/////////  parallax effect layer movement logic
window.addEventListener("scroll", function () {
  var scrolled = window.scrollY;
  var layers = document.getElementsByClassName("layer");
  var speed, yPos;
  for (var i = 0; i < layers.length; i++) {
    speed = layers[i].getAttribute("data-speed") * 2;
    yPos = -(scrolled * speed);
    layers[i].style.top = yPos + "px";
  }
});

//////// scroll down btn animation

anime({
  targets: ".scroll_down",
  translateY: 10,
  direction: "alternate",
  loop: true,
  easing: "linear",
  duration: 1000,
});

///////// Lottie Animations

document.addEventListener("DOMContentLoaded", function () {
  const animationElement = document.querySelector(".lottie-intro");

  const animation = lottie.loadAnimation({
    container: animationElement, // the DOM element that will contain the animation
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./Line_Long.json", // the path to the animation json
  });

  // Get the height of the viewport
  const viewportHeight = window.innerHeight;

  // Function to update the progress of the animation based on the scroll position

  const updateAnimationProgress = () => {
    const scrollPosition = window.scrollY;
    const viewportWidth = window.innerWidth;
    let multiplier = 7;
    if (viewportWidth > 1200) {
      multiplier = 7;
    } else if (viewportWidth > 998) {
      multiplier = 7.5;
    } else if (viewportWidth > 768) {
      multiplier = 8.5;
    } else if (viewportWidth > 576) {
      multiplier = 13;
    } else if (viewportWidth > 400) {
      multiplier = 15;
    } else if (viewportWidth > 300) {
      multiplier = 25;
    }
    let animationProgress = (scrollPosition * multiplier) / viewportHeight;
    if (animationProgress > 30) {
      animationProgress = 29;
    }
    animation.goToAndStop(animationProgress * animation.getDuration(), true);
  };

  // Update the animation progress when the page is scrolled
  window.addEventListener("scroll", updateAnimationProgress);
});

////////// section appearance trigger animations

document.addEventListener("DOMContentLoaded", function () {
  // Get the element you want to reveal
  const revealElement = document.querySelector(".reveal-element");

  // Create the observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // If the element is in the viewport, add the 'reveal' class
        if (entry.isIntersecting) {
          revealElement.classList.add("reveal");
        } else {
          revealElement.classList.remove("reveal");
        }
      });
    },
    { rootMargin: "-120px 0px" }
  );

  // Start observing the element
  observer.observe(revealElement);
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the element you want to reveal
  const revealElement = document.querySelector(".prof_brief_info");

  // Create the observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // If the element is in the viewport, add the 'reveal' class
        if (entry.isIntersecting) {
          revealElement.classList.add("reveal");
        } else {
          revealElement.classList.remove("reveal");
        }
      });
    },
    { rootMargin: "40px 0px" }
  );

  // Start observing the element
  observer.observe(revealElement);
});

///////// Main Logo Ripple Animations

// Select the ripple elements
var ripples = document.querySelectorAll(".ripple");

// Create the animation for each ripple
ripples.forEach((ripple, index) => {
  anime({
    targets: ripple,
    scale: [1, 1.5],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    duration: 2000,
    delay: function (el, i, l) {
      // Each ripple starts 200ms after the previous one
      // After all ripples have started, there is a delay of 3000ms before the next array of ripples
      return index * 200;
    },
    loop: true,
    direction: "alternate",
    loopComplete: function (anim) {
      // Add a delay of 3000ms after each loop
      setTimeout(() => anim.play(), 3000);
    },
  });
});

///////// Intro Line Animation

// Select the intro_line element
var introLine = document.querySelector(".intro_line");

// Create the animation
anime({
  targets: introLine,
  height: [50, 70], // Stretch the element to 100% width
  translateY: [20, 22], // Move the element down by 20px
  width: [2.45, 1.3],
  easing: "easeInElastic(1, .2)",
  duration: 4000,
  direction: "alternate",
  loop: true,
  delay: 3000,
});

///////// scroll progress bar

let circle = document.querySelector(".progress-ring__circle");
let radius = circle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

window.addEventListener("scroll", function () {
  let scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  let scrollPosition = window.scrollY;
  let percent = (scrollPosition / scrollableHeight) * 100;
  setProgress(percent);
});

///////// heading hover event listener

document.querySelector(".heading").addEventListener("mouseover", function () {
  document.querySelector(".prof_image").style.transform =
    "translateY(-10px) scale(1.5)";
  document.querySelector(".prof_image").style.borderRadius = "0%";
  document.querySelector(".prof_image").style.filter =
    "grayscale(20%) blur(0.1px)";
});

document.querySelector(".heading").addEventListener("mouseout", function () {
  document.querySelector(".prof_image").style.transform = "";
  document.querySelector(".prof_image").style.borderRadius = "";
  document.querySelector(".prof_image").style.filter = "";
});

///////// mouse pointer click animation

document.addEventListener("click", function (e) {
  // Create a new div element for the click effect
  var clickEffect = document.createElement("div");
  clickEffect.className = "clickEffect";

  // Set the size and position of the click effect
  clickEffect.style.width = clickEffect.style.height = "100px";
  clickEffect.style.left = e.pageX - 50 + "px";
  clickEffect.style.top = e.pageY - 50 + "px";

  // Add the click effect to the body
  document.body.appendChild(clickEffect);

  // Remove the click effect after the animation ends
  setTimeout(function () {
    clickEffect.parentNode.removeChild(clickEffect);
  }, 2000);
});

// scroll-snap

// Observer for entering the viewport
var observerEnter = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
    });
  },
  {
    threshold: 0.2,
  }
);

// Observer for exiting the viewport
var observerExit = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  },
  {
    threshold: 0.3,
  }
);

// Observe each element

observerEnter.observe(document.querySelector(".reveal-element-container-1"));
observerExit.observe(document.querySelector(".reveal-element-container-1"));

let revealElementItem = document.getElementById("reveal-element-id");
