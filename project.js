 var restart = document.querySelector("#b")

 var square = document.querySelectorAll("td")

function reset() {
  for (var i = 0; i < square.length; i++) {
    square[i].textContent = ""
  }
}

restart.addEventListener('click',reset);

function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = "0";
  }else {
    this.textContent = '';
  }
}

for (var i = 0; i < square.length; i++) {
 square[i].addEventListener('click',changeMarker)
}
