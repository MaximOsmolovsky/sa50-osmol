function dota2(){
    var block = document.getElementById("bubl1k");
    var bublik = 0;
    var id = setInterval(frame, 10);
    function frame(){
      if (bublik == 425){
        setTimeout(function() {dota2()}, 0);
      } else{
        bublik++;
        block.style.left= bublik + 'px';
      }
    }
  }