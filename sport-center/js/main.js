let buttons = document.querySelectorAll("#button");
let title = document.querySelector("#title");
let title2 = document.querySelector("#title2");
let image = document.querySelector("#class-image");
let header = document.querySelector("#header");
let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let triangle = document.querySelector(".triangle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let text = button.textContent;

    if (text === "Yoga") {
      image.src = "./images/yoga.jpg";
      image.alt = "Yoga photo";
      title.innerHTML = "Why are your Yoga?";
      title2.innerHTML = "When comes Yoga Your Time.";
    } else if (text === "Group") {
      image.src = "./images/group.webp";
      image.alt = "Group photo";
      title.innerHTML = "Why are your Group?";
      title2.innerHTML = "When comes Group Your Time.";
    } else if (text === "Solo") {
      image.src = "./images/solo.jpg";
      image.alt = "Solo photo";
      title.innerHTML = "Why are your Solo?";
      title2.innerHTML = "When comes Solo Your Time.";
    } else if (text === "Stretching") {
      image.src = "./images/stret.webp";
      image.alt = "Stretching photo";
      title.innerHTML = "Why are your Stretching?";
      title2.innerHTML = "When comes Stretching Your Time.";
    }
  });
});

window.addEventListener("scroll", (e) => {
  let scroll = window.scrollY;
  if (scroll > 150) {
    header.style.backgroundColor = "#355592";
  } else if (scroll <= 150) {
    header.style.backgroundColor = "transparent";
  }
});

weight.addEventListener("input", (e) => {
  let heightMeter = parseFloat(height.value) / 100;
  let bmiValue = parseFloat(weight.value) / (heightMeter * heightMeter);

  if (bmiValue > 35) {
    triangle.style.left = "570px";
    console.log(bmiValue);
  } else if (bmiValue < 12) {
    triangle.style.left = "100px";
    console.log(bmiValue);
  } else if (bmiValue > 18.5 && bmiValue < 25) {
    triangle.style.left = `${bmiValue * 1.6}%`;
    console.log(bmiValue);
  } else if (bmiValue >= 25 && bmiValue < 30) {
    triangle.style.left = `${bmiValue * 1.78}%`;
    console.log(bmiValue);
  } else if (bmiValue >= 30 && bmiValue < 35) {
    triangle.style.left = `${bmiValue * 1.96}%`;
    console.log(bmiValue);
  }
});

const navbar = document.querySelector("#h-items");
const hmbgrBtn = document.querySelector(".hmbgr");

let lastClickedId = "";

document.addEventListener("click", (event) => {
  let screenWidth = window.innerWidth;
  let id = event.target.className.baseVal;

  if (screenWidth < 577) {
    if (id == "hmbgr" && lastClickedId !== "hmbgr") {
      navbar.style.transform = "translateY(20%)";
      lastClickedId = id;
      console.log(lastClickedId);
    } else if (id !== "hmbgr" && lastClickedId == "hmbgr") {
      navbar.style.transform = "translateY(-100%)";
      lastClickedId = id;
      console.log(lastClickedId);
    } else {
      navbar.style.transform = "translateY(-100%)";
      lastClickedId = "";
    }
  }
});
