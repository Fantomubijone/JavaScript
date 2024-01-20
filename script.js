function changeColors() {
  const body = document.body;
  const layout = document.querySelector(".Layout");
  const button = document.getElementById("changeColorButton");

  // Generate random RGB values for background color
  const randomColor = () => Math.floor(Math.random() * 256);
  const bgColorLayout = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  const bgColorBody = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  const textColor = `rgb(${255 - randomColor()}, ${255 - randomColor()}, ${
    255 - randomColor()
  })`;

  body.style.backgroundColor = bgColorBody;
  layout.style.backgroundColor = bgColorLayout;
  layout.style.color = textColor;
}
