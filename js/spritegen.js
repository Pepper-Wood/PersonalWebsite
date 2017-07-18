var canvas, context, hw, aw, ah, map, ow, col, url, colors;
var nesColors = ['#7C7C7C','#0000FC','#0000BC','#4428BC','#940084','#A80020','#A81000','#881400','#503000','#007800','#006800','#005800','#004058','#000000','#000000','#000000','#BCBCBC','#0078F8','#0058F8','#6844FC','#D800CC','#E40058','#F83800','#E45C10','#AC7C00','#00B800','#00A800','#00A844','#008888','#000000','#000000','#000000','#F8F8F8','#3CBCFC','#6888FC','#9878F8','#F878F8','#F85898','#F87858','#FCA044','#F8B800','#B8F818','#58D854','#58F898','#00E8D8','#787878','#000000','#000000','#FCFCFC','#A4E4FC','#B8B8F8','#D8B8F8','#F8B8F8','#F8A4C0','#F0D0B0','#FCE0A8','#F8D878','#D8F878','#B8F8B8','#B8F8D8','#00FCFC','#F8D8F8','#000000','#000000']
window.charmap;
window.numToGen;





function plot(y, x, color) {
    x = Math.floor(x * s);
    y = Math.floor(y * s);
    context.moveTo(x, y);
    context.beginPath();
    context.rect(x, y, s, s);
    context.fillStyle = color;
    context.fill();
}

function erase(){
  context.clearRect(0,0,aw, ah);
}



function updateListen(){
      for(var i = 0; i < 3; i++) {
        //colors[i] = '#'+Math.floor(Math.random()*16777215).toString(16);
        colors[i] = nesColors[Math.floor(Math.random() * nesColors.length)]
      }
      massPlot();
}

function pickColor(){
  col = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.color = col;


  return col;


}

function genRandom(){

    $('#gen').val(Math.random() * 10000);
    console.log("Last value: " + $('#gen').val());
    updateListen();
}


function massPlot(){
  erase();
  var dup = 0;
  var num = 0;
  for(var j = 0; j <= 5; j++) {
    for(var i = 0; i <= 10; i++) {
      num = i + map.length * j;
      if(Math.floor(Math.random() * 2) == 0) {
        dup = 0 + (5 - j);
        var color = pickColor();
        plot(i, j, color);
        plot(i, dup, color);
      }
    }
  }
}


$(function(){
    aw = ah = 500;
    ah = 500;
    s = aw/10;
    map = new Array(10);
    for(var i = 0; i < map.length; i++){
      map[i] = new Array(10)
      for(var j = 0; j < map[0].length; j++)
        map[i][j] = 0;
    }
    colors = new Array(3);
    for(var i = 0; i < 3; i++) {
      //colors[i] = '#'+Math.floor(Math.random()*16777215).toString(16);
      colors[i] = nesColors[Math.floor(Math.random() * nesColors.length)];
    }
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    context.strokeStyle = 'black';
    genRandom();
      hw = hex_md5($('#gen').val());

      ow = hw = "";
      updateListen();
    $('#gen').change(function(){updateListen()}).click(function(){updateListen()}).keyup(function(){updateListen()});


});
