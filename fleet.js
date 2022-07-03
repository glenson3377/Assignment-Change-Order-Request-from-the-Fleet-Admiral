// fleet admiral changes
function countdown() {
    var count = 10 // this will keep track of the number
    var timeout = 10000 // this variable will help to pause between actions

    for (var i = 10; i > 0; i--){ // counts from 10 to 0
        if(i >= 5){// execute if i greater than 5
            setTimeout(function(){
            count = count - 1;
            document.getElementById('display').innerHTML = 'almost done ' + count;
            console.log('current time almost done ' + count + ' ' + i);
            }, 1000 * i);}else
            if(i < 5 && i > 0){// execut if i is less than 5
                setTimeout(function(){
                count = count - 1;
                document.getElementById('display').innerHTML = count;
                console.log('current time ' + count + ' ' + i);
                }, 1000 * i);}else
                 {// execute when i is 0 and count is 0
            setTimeout(function(){
                count = count - 1;
                document.getElementById('display').innerHTML = 'Blast off!!! ' + count;
                console.log('script complete ' + count + ' ' + i);
                }, 1000 * i);}
    }
}   