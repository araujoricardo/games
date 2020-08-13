import {spaceship} from "../entities/spaceship";

export function movesControl(event:any):void{
    switch(event.key){
        case "ArrowRight":{
            return spaceship.moveRight();
        };
        case "ArrowLeft":{
            return spaceship.moveLeft();
        };
        default:{
            return;
        };
    };
};