const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");

cnv.width = screen.width;
cnv.height = screen.height;

const dx = 1;
let x = 0;
function y(x) {
  return 1/1000 * Math.pow(x, 2);
}

function render() {
  if(x < 0 || x > cnv.width) { return; }
  ctx.fillStyle = `#${x+3}${x+1}`;
  ctx.fillRect(x, cnv.height / 2, dx, y(x) - x);
  x++;
}

setInterval(() => { render(); }, 20);
