
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */


var characterReplacement = function(s, k) {
    var control=[]
    var currentChar="";
    var maxIndex=0;
    var maxCounter=0;
    var counter=0;
    s.split('').forEach(function(ch,i){
        if(currentChar!==ch){
            // the index has  not been  registered yet.
            currentChar =ch
            if(counter>maxCounter){ 
                maxCounter=counter
                maxIndex=control[control.length-1]
            }
            control.push(i)
            counter=1
        }else{
            counter++
        }
    })
    /**
     * repacling k times
     */

};