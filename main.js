var canvas=new fabric.Canvas("C1");
playerx=10;
playery=10;
blockwidth=30;
blockheight=30;

var P="";
var B="";

function update()
{
    
  
         function block(g)
{
    fabric.Image.fromURL(g,function(Img)
    {
        B=Img;

       B.scaleToWidth(blockwidth);
         B.scaleToHeight(blockheight);
          B.set({ top:playery, left:playerx });
           canvas.add(B);
         }); }

window.addEventListener("keydown",Mykeydown);

function Mykeydown(e)

{
keypreesd=e.keyCode;

if (e.shiftKey && keypreesd== '80')
{
  blockwidth=blockwidth+10;
  blockheight=blockheight+10;
  document.getElementById("current_width").innerHTML=blockwidth;
  document.getElementById("current_height").innerHTML=blockheight;
}

if (e.shiftKey && keypreesd== '77')
{
  blockwidth=blockwidth-10;
  blockheight=blockheight-10;
  document.getElementById("current_width").innerHTML=blockwidth;
  document.getElementById("current_height").innerHTML=blockheight;
}

if (keypreesd=='37')
{
  left();
  console.log("left")
}

if (keypreesd=='39')
{
  right();
  console.log("right")
}

if (keypreesd=='38')
{
  up();
  console.log("up")
}

if (keypreesd=='40')
{
  down();
  console.log("down")
}

if(keypreesd=='87')
{
  block('wall.jpg');
  console.log("w");
}

if(keypreesd=='71')
{
  block('ground.png');
  console.log("g");
}

if(keypreesd=='76')
{
  block('light_green.png');
  console.log("l");
}

if(keypreesd=='84')
{
  block('trunk.jpg');
  console.log("t");
}

if(keypreesd=='82')
{
  block('roof.jpg');
  console.log("r");
}

if(keypreesd=='89')
{
  block('yellow_wall.png');
  console.log("y");
}

if(keypreesd=='68')
{
  block('dark_green.png');
  console.log("d");
}

if(keypreesd=='85')
{
  block('unique.png');
  console.log("u");
}

if(keypreesd=='67')
{
  block('cloud.jpg');
  console.log("c");
}
}

        function up()
{
  if(playery>=0)
{


  playery=playery-blockheight;
  canvas.remove(P);
  update();
}

}

function down()
{
  if(playery<=500)
{


  playery=playery+blockheight;
  canvas.remove(P);
  update();
}

}

function left()
{
  if(playerx>=0)
{


  playerx=playerx-blockwidth;
  canvas.remove(P);
  update();
}

}

function right()
{
  if(playerx<=850)
{


  playerx=playerx+blockwidth;
  canvas.remove(P);
  update();
}

}