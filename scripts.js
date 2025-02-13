var modal = document.getElementById("myModal1");
var work1 = document.getElementById("work1");
var span = document.getElementsByClassName("close1")[0];

work1.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

var modal2 = document.getElementById("myModal2");
var work2 = document.getElementById("work2");
var span2 = document.getElementsByClassName("close2")[0];

work2.onclick = function() {
    modal2.style.display = "block";
  }
  span2.onclick = function() {
    modal2.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal2.style.display = "none";
    }
}

var modal3 = document.getElementById("myModal3");
var work3 = document.getElementById("work3");
var span3 = document.getElementsByClassName("close3")[0];

work3.onclick = function() {
    modal3.style.display = "block";
  }
  span3.onclick = function() {
    modal3.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal3.style.display = "none";
    }
}

