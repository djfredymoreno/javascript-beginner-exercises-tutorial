// Your code here:
let bottles ;
for(let i =99 ; i>-1 ; i--){
    if(i==1){
        bottles =  i + ' bottle of milk on the wall, ' 
        + i + ' bottle of milk.' + ' Take one down and pass it around, '
         + 'no more bottles of milk on the wall.';
        console.log(bottles);
    }
    if(i==2){
        bottles =  i + ' bottles of milk on the wall, ' 
        + i + ' bottles of milk.' + ' Take one down and pass it around, '
        + (i-1) + ' bottle of milk on the wall.';
        console.log(bottles);
    }
    if(i==0){
        bottles =  'No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.';
        console.log(bottles); 
    }
    if(i>2){
    bottles =  i + ' bottles of milk on the wall, ' 
    + i + ' bottles of milk.' + ' Take one down and pass it around, '
     + (i-1) + ' bottles of milk on the wall.';
    console.log(bottles);
    }
}