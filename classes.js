// reference type
// context
// instantiation

// console.log([1] === [1]);
//var object1 = { value: 10 };
//var object2 = object1;
//var object3 = { value: 10 };
// console.log(object1 === object3);
// console.log(object2);
// object1.value = 15;
// console.log(object3.value);
// context vs scope
// console.log(this);
// if (typeof window.alert("hello"));
// instantiation
/*const object4 = {
    a: function() {
        console.log(this);
    }
}*/

//object4.a();

class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log('Hi I am', this.name, 'I am a', this.type);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log('WEEEEEE I am a', this.type);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
wizard1.play();
wizard1.introduce();
wizard2.introduce();