import { Observable, Observer } from "rxjs";

let number = [1, 5, 10, 20];

let source = Observable.create((observer)=>{

    let index = 0;
    let produceValue = () =>{
        observer.next(number[index++])

        if(index < number.length){
            setTimeout(() =>{
                produceValue();
            },2000);
        }else{
            observer.complete();
        }
        
    }
produceValue();
}).map(x => x * 2).filter(x => x >= 10);