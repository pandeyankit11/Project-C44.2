class Form{
    constructor(){
        this.input1=createInput("Name");
        

        this.input2=createInput("Age");
        

        this.input3=createInput("Password");
        
        
        this.button1 = createButton('BLAST');
        
        this.title = createElement('h2');
        
        
        this.button2 = createButton('ABOUT GAME');
       

        this.button3 = createButton('BLASTO STORY');
       

        this.button4 = createButton('HOW TO BLAST');
        

        this.button5 = createButton('PASSWORD');
        }

        hide(){
            this.button2.hide();
            this.input1.hide();
            this.input2.hide();
            this.input3.hide();
            this.button1.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.title.hide();
        }
    display(){
       
        this.title.html("HELICOPTER BLASTER");
        this.title.position(470,-35);
        this.title.style('color',' blue');
        this.title.style('width','595px');
        this.title.style('height','600px');
        this.title.style('fontSize','53px');
        this.title.style('fontStyle','italic');
       
       
        this.input1.position(150,250);
        this.input1.style('background','orange');
        this.input1.style('width','190px');
        this.input1.style('height','30px');
        this.input1.style('fontStyle','italic');
        this.input1.style('fontSize','20px');
        this.input1.style('color','aqua');

        this.input2.position(150,300);
        this.input2.style('background','white');
        this.input2.style('height','30px');
        this.input2.style('fontStyle','italic');
        this.input2.style('fontSize','20px');
        this.input2.style('width','190px');
        this.input2.style('color','purple');

        this.input3.position(150,350);
        this.input3.style('background','green')
        this.input3.style('height','30px');
        this.input3.style('fontStyle','italic');
        this.input3.style('fontSize','20px');
        this.input3.style('width','190px');
        this.input3.style('color','lime');
        
        this.button1.position(745,650);
        this.button1.style('height','50px');
        this.button1.style('width','100px');
        this.button1.style('background','red');
        this.button1.style('fontSize','25px');
        this.button1.style('color','yellow');
        

        this.button2.position(1250,300);
        this.button2.style('height','50px');
        this.button2.style('width','220px');
        this.button2.style('background','darkred');
        this.button2.style('fontSize','25px');
        this.button2.style('color','fuchsia');

        this.button3.position(1250,370);
        this.button3.style('height','50px');
        this.button3.style('width','220px');
        this.button3.style('background','dodgerblue');
        this.button3.style('fontSize','25px');
        this.button3.style('color','gold');

        this.button4.position(1250,440);
        this.button4.style('height','50px');
        this.button4.style('width','220px');
        this.button4.style('background','GREENYELLOW');
        this.button4.style('fontSize','25px');
        this.button4.style('color','navy')

        this.button5.position(1250,510);
        this.button5.style('height','50px');
        this.button5.style('width','220px');
        this.button5.style('background','salmon');
        this.button5.style('fontSize','25px');
        this.button5.style('color','aqua');

        this.button5.mousePressed(()=>{
            this.button2.hide();
            this.input1.hide();
            this.input2.hide();
            this.input3.hide();
            this.button1.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.title.hide();

            gameState =1;
            
    })
    this.button1.mousePressed(()=>{
        this.button2.hide();
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.button1.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.title.hide();
        
    
    })

    this.button2.mousePressed(()=>{
        this.button2.hide();
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.button1.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.title.hide();
        
    
    })

    this.button3.mousePressed(()=>{
        this.button2.hide();
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.button1.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.title.hide();
        
    
    })

    this.button4.mousePressed(()=>{
        this.button2.hide();
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.button1.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.title.hide();
        
    
    })

    

    }
}