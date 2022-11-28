const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");

cnv.width = screen.width;
cnv.height = screen.height;

ctx.translate(cnv.width / 2, cnv.height / 2);

const dx = 1;
let x = -(cnv.width / 2);
function y(x) {
  return 1/1000 * -Math.pow(x, 2) + cnv.height / 2;
}

function render() {
  if(x > cnv.width || x < -(cnv.width / 2)) { return; }
  ctx.fillStyle = 'aqua';
  ctx.fillRect(x, y(x), dx, y(x) - x);
  console.log(x);
  x++;
}

setInterval(() => { render(); }, 50);
