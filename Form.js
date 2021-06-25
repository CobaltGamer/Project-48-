class Form {

  constructor() {
    this.button1 = createButton('Pac-Man');
    this.button2 = createButton('Ghost');
    this.title = createElement('h2');
  //  this.reset = createButton('Reset');
  }
  hide(){
    this.button1.hide();
    this.button2.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Choose Your Character");
    this.title.position(210, 100);

    
    this.button1.position(300, 400);
    this.button2.position(310, 500);
 //   this.reset.position(500,20);

    this.button1.mousePressed(()=>{
      this.title.hide();
      this.button1.hide();
      this.button2.hide();
      player = new Player(pacman);
      button = 1;
      player.updateState("play");
    });
    
     this.button2.mousePressed(()=>{
      this.title.hide();
      this.button1.hide();
      this.button2.hide();
      player = new Player(ghost);
      button = 2;
      player.updateState("play");
    }); 

  /*  this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });*/

  }
}
