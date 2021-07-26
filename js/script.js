let fieldWidth = $(".field").width();
let fieldHeight = $(".field").height();

const ball = $(".ball");
const field = $(".field");
const goal = $("#goal");

const goalTextWidth = goal.width();
const ballWidth = ball.width();
const ballHeight = ball.height();

const OUT_FIELD_WIDTH = fieldWidth / 19.2;
const OUT_FIELD_HEIGHT_TOP = fieldHeight / 2.45;
const OUT_FIELD_HEIGHT_BOTTOM = fieldHeight / 1.8;

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function score() {
  if (
    ball.position().top > OUT_FIELD_HEIGHT_TOP &&
    ball.position().top < OUT_FIELD_HEIGHT_BOTTOM
  ) {
    goal.animate({ left: -(fieldWidth + goalTextWidth) }, 2000, function () {
      goal.css("left", fieldWidth);
    });
  }
}

ball.click(function () {
  const top = randomInteger(0, fieldHeight - ballHeight);

  if (ball.position().left < fieldWidth / 2) {
    const left = fieldWidth - OUT_FIELD_WIDTH - ballWidth;
    ball.animate({ left: left, top: top }, 1000, score);
  }
  if (ball.position().left > fieldWidth / 2) {
    const left = OUT_FIELD_WIDTH;
    ball.animate({ left: left, top: top }, 1000, score);
  }
});
