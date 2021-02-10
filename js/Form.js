class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350,0);
        this.title.style('font-size', '70px');
        //this.title.style('font', 'ink free');
        this.title.style('color', 'white');
        this.input.position(550,300);
        this.input.style('color', 'white');
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'black');
        this.button.position(550,350);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('color', 'black');
        this.button.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(350,250);
            this.greeting.style('color','black');
            this.greeting.style('font-size', '80px');
        });

    }
}