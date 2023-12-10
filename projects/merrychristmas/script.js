//typed text
const typed = new Typed(".text", {
  strings: [
    "Peace and joy to you and yours this Christmas season.",
    "Thinking warmly of each of you and wishing your family an extra measure of comfort, joy and hope this Christmas.",
    "I hope your holiday season is full of good things.",
    "Praying you have a wonderful Christmas filled with moments you’ll always remember.",
    "Merry Christmas with lots of love.",
  ],
  typeSpeed: 35,
  backSpeed: 25,
  backDelay: 3000,
  loop: true,
});

const typed2 = new Typed(".text2", {
  strings: ["Merry Christmas...", "and Happy New Year!"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 4000,
  loop: true,
});

//snowfall
let snowfall = new Snowfall({
  count: 150, // number of snowflakes
  minRadius: 1, // minimum radius of a snowflake in pixels
  maxRadius: 15, // maximum radius of a snowflake in pixels
  minSpeed: 1, // minimum speed of a snowflake in pixels per frame
  maxSpeed: 7, // maximum speed of a snowflake in pixels per frame
  text: "\u2744", // text for a snowflake (can be any symbol or text)
  color: "#ffffff", // color of a snowflake in HEX format
  zIndex: "-1", // z-index for the snowflakes canvas
});
