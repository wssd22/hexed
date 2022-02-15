function getName(): string {
    let input:string = prompt("What is your name?");
    alert(`Your name is ${input}`);
    return input;
}
function getTime() {
    let input:string = prompt("How long do you want to play? (0-100)");
    let ret:number = 60;
    if (input == ""){
        ;
    }
    else {
        ret = parseInt(input);
    }
    alert(`You will play for ${ret} seconds`);
    return ret;
}

class HexCode {
    red:number;
    green:number;
    blue:number;

    constructor() {
        this.red = Math.floor(Math.random() * (256));
        this.green = Math.floor(Math.random() * (256));
        this.blue = Math.floor(Math.random() * (256));
    }
    
    // g.toString(16) <- number to hex
    // parseInt(hexnumber, 16) <- hex to number
}

class Top10 {
    list: []

    constructor() {
        this.list = [];
    }

    addPlayer(player:Player) {
        for (let i = 0; i < this.list.length; i++) {
            if (player.score > this.list[i].)
        }
    }
}

class Player {
    name: string;
    score: number;
    
    constructor(name:string) {
        this.name = name;
        this.score = 0;
    }
    
    setScore(score:number) {
        this.score = score;
    }
}

function calculateScore(guessed_green:number, actual_green:number, guessed_red:number, actual_red:number, guessed_blue:number, actual_blue:number, seconds_remaining:number, seconds_selected:number):number {
    let r:number = (255 - Math.abs(actual_red - guessed_red)) + (255 - Math.abs(actual_green - guessed_green)) + (255 - Math.abs(actual_blue - guessed_blue)) * Math.floor(seconds_remaining) * (1000 * (101 - seconds_selected));
    return r;
}

function main() {
    //start game
    const name = getName();
    const time = getTime();
    const player = new Player(name);
    const hexCode = new HexCode();

    

    // display chosen color to user and inputs for them to enter guesses
    // when user inputs color, calculateScore & set Player's score
    // if calculateScore is in top10, add user's name to high score table

    // var actual:[string,number][];
    // actual = [["red",hexCode.red],['green',hexCode.green],['blue',hexCode.blue]];

    //
    
}

