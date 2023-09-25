let AboutText = document.querySelector(".About_box");

console.log(AboutText);

window.addEventListener("scroll", () => {
  const value = document.documentElement.scrollTop;
  console.log(value);
  if (value > 300) {
    AboutText.style.animationName = "slide";
  } else {
    AboutText.style.animationName = "";
  }
});

let mainText = document.querySelector(".Epilog_text");

console.log(mainText);

window.addEventListener("scroll", () => {
  const value01 = document.documentElement.scrollTop;

  console.log(value01);
  if (value01 > 4000) {
    mainText.style.animationName = "Epilog";
  } else {
    mainText.style.animationName = "";
  }
});
