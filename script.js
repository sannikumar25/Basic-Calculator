



// ================== GSAP Animations ==================
let tl = gsap.timeline();

gsap.from(".container", {
  scale: 0,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)",
  delay: 0.5
});

tl.from("#input-box", {
  scale: 0.3,
  opacity: 0,
  y: -100,
  duration: 1,
  delay: 0.5,
  ease: "power4.out"
});

tl.from("button", {
  scale: 0,
  duration: 0.4,
  delay: 0.5,
  ease: "bounce"
});

// ================== Button Glow Effects ==================
const colors = ["#ff3c3c", "#00ffb3", "#ffa600", "#00ccff", "#d500f9", "#2fff00"];
const buttons = document.querySelectorAll("button");

buttons.forEach((button, index) => {
  const glowColor = colors[index % colors.length];
  const defaultShadow = `-8px -8px 15px rgba(255, 255, 255, 0.1), 8px 8px 15px rgba(0, 0, 0, 0.2)`;
  button.style.boxShadow = defaultShadow;

  button.addEventListener("mouseenter", () => {
    gsap.to(button, {
      scale: 1.1,
      boxShadow: `0 0 25px ${glowColor}, 0 0 35px ${glowColor}`,
      duration: 0.3
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      scale: 1,
      boxShadow: defaultShadow,
      duration: 0.3
    });
  });

  button.addEventListener("mousedown", () => {
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1
    });
  });

  button.addEventListener("mouseup", () => {
    gsap.to(button, {
      scale: 1.1,
      duration: 0.1
    });
  });
});

// ================== Calculator Logic ==================
let input = document.getElementById("input-box");
let string = "";

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const btnText = e.target.innerText;

    if (btnText === "=") {
      try {
        string = eval(string).toString();
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } else if (btnText === "AC") {
      string = "";
      input.value = string;
    } else if (btnText === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string += btnText;
      input.value = string;
    }
  });
});

// ================== Keyboard Input Support ==================
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789+-*/().";

  if (allowedKeys.includes(e.key)) {
    string += e.key;
    input.value = string;
  } else if (e.key === "Enter") {
    e.preventDefault();
    try {
      string = eval(string).toString();
      input.value = string;
    } catch {
      input.value = "Error";
      string = "";
    }
  } else if (e.key === "Backspace") {
    string = string.slice(0, -1);
    input.value = string;
  } else if (e.key === "Escape") {
    string = "";
    input.value = string;
  }
});
