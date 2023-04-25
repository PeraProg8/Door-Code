let doorKnocks = 0;
let sentence = "";

function door(){ //Função de recolha de Knocks
    doorKnocks += 1
    document.getElementById("knock-sound").play();
}

function bell(){ //Função de compilação de Door Code
    document.getElementById("doorbell-sound").play();
    if(doorKnocks == 0){
        doorKnocks = "."
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 1){
        doorKnocks = "a"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 2){
        doorKnocks = "b"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 3){
        doorKnocks = "c"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 4){
        doorKnocks = "d"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 5){
        doorKnocks = "e"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 6){
        doorKnocks = "f"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 7){
        doorKnocks = "g"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 8){
        doorKnocks = "h"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 9){
        doorKnocks = "i"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 10){
        doorKnocks = "j"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 11){
        doorKnocks = "k"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 12){
        doorKnocks = "l"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 13){
        doorKnocks = "m"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 14){
        doorKnocks = "n"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 15){
        doorKnocks = "o"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 16){
        doorKnocks = "p"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 17){
        doorKnocks = "q"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 18){
        doorKnocks = "r"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 19){
        doorKnocks = "s"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 20){
        doorKnocks = "t"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 21){
        doorKnocks = "u"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 22){
        doorKnocks = "v"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 23){
        doorKnocks = "w"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 24){
        doorKnocks = "x"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 25){
        doorKnocks = "y"
        sentence += doorKnocks.toString()
    }else if(doorKnocks == 26){
        doorKnocks = "z"
        sentence += doorKnocks.toString()
    }else if(doorKnocks > 27){
        doorKnocks = " "
        sentence += doorKnocks.toString()
    }
    document.getElementById("output").value = sentence;
    doorKnocks = 0
}