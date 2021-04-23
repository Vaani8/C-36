class Form {
 constructor(){
 
}
 display(){
     var title = createElement('h2');
     title.html("Car Racing Game");
     title.position(500,0);

     var input=createInput("");
     var button =createButton("Play");
     input.position(550,190);
     button.position(510,190);
     button.mousePressed(function(){
         input.hide();
         button.hide();
         var name=input.value();
         var greeting=createElement('h3')
         greeting.html("hi"+name);
         greeting.position(130,60);
     })

 }
};