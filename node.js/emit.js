import { EventEmitter } from "events";

const emitter = new EventEmitter();

function greet(name) {
    return console.log(`hello ${name}`);
}

function goodbye(name) {
    return console.log(`bye ${name}`);
}

emitter.on("greet", greet);
emitter.on("salutations", goodbye);

// emitting the listeners

emitter.emit("greet", "sai");
emitter.emit("salutations", "sai");