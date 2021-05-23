class Game{
    constructor(){
this.button1 =createButton("BACK");
    }
    start(){
        if(gameState ===0){
            form =new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        fill('yellow');
        textSize(75);
        text("S9@p4$4WE",550,400);

        fill('red');
        textSize(35);
        text("Password For Level 1",600,280);

        this.button1.position(50,50);

        this.button1.mousePressed(()=>{
           

            gameState =0;
            
    })
    }
    
}