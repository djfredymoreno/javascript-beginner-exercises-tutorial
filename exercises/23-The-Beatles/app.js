
var letter = 'let it be, ';
var letter1 = 'whisper words of wisdom, ';
var letter2 = 'there will be an answer, ';

function sing(){
    var x = 1;
    var z = 1;
    var empty = '';

    for (let i=0 ; i<13 ; i++){
        if(x<5 && z<5){
             empty = empty + letter;
             x++;
             z++;
        }else{
          empty = empty + letter1;
          break;
        }
    }

    x=1;
    z=1;

    for (let i=0 ; i<6 ; i++){
        if(x<6 && z<6){
            empty = empty + letter;
             x++;
             z++;
        }else {
            empty = empty + letter2 + 'let it be'; 
        }
    }
    return empty;
}
console.log(sing());