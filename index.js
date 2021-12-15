// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    if (right < 360) {
      dodger.style.left = `${right + 10}px`;
    }
  }
function moveDodgerUp() {
    const topNumbers = dodger.style.bottom.replace("px", "");
    const top = parseInt(topNumbers, 10);
  
    if (top < 380) {
      dodger.style.bottom = `${top + 10}px`;
    }
  }
function moveDodgerDown() {
    const downNumbers = dodger.style.bottom.replace("px", "");
    const down = parseInt(downNumbers, 10);
  
    if (down > 0) {
      dodger.style.bottom = `${down - 10}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
        } else if (e.key === "ArrowRight") {
          moveDodgerRight();
        } else if (e.key === "ArrowUp") {
          moveDodgerUp();
        } else if (e.key === "ArrowDown") {
          moveDodgerDown();
        } 
          });
  /*
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
*/