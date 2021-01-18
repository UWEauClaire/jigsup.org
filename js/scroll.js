var timeout;
var direction = 1;
var time;

function pageScroll() {
  var scrollable = document.getElementById('scrollable');
  scrollable.scrollTop = scrollable.scrollTop + direction;
  var location = scrollable.scrollTop;
  var max = scrollable.scrollHeight - parseInt(scrollable.style.height);
  var mid = max / 2;
  if(location == 0) {
    direction = 1;
  }else {
    if(location == (scrollable.scrollHeight - parseInt(scrollable.style.height, 10))){
      direction = -1;
    }else {
      if(location < 2) {
        time = 1250;
      } else if(location > max - 2) {
        time = 1250;
      }else if(location < 1000) {
        time = 25;//25 - 3.4 * Math.log(location);
      }else {
        if(location > max - 1000) {
          time = 25;//25 - 3.4 * Math.log(max - location);
        }else {
          time = 25;
        }
      }
    }
  }
  //console.log("Location: " + location);
  //console.log("Max: " + max);
  //console.log("Mid: " + mid);
  //console.log("Time: " + time);

  timeout = setTimeout('pageScroll()', time);
}

var start = document.getElementById("table");
start.style.display = "block";
start.style.width = (.95 * window.innerWidth).toString() + 'px';
start.style.height = (.95 * window.innerHeight).toString() + 'px';
start.style.marginTop = ((window.innerHeight - parseInt(start.style.height, 10))/ 2).toString() + 'px';
start.style.marginLeft = ((window.innerWidth - parseInt(start.style.width, 10)) / 2).toString() + 'px';
pageScroll();
