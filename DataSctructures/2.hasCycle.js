/** *
 * Given a linked list, determine if it has a cycle in int. 
 * To represent a cycle in the given linked list, we use an integer "pos" which represents the
 * position (0 - indexed) in the linked list where tail connects to. If "pos" is "-1", there is no
 * ciclye in the linked list.
 * 
*/


var hasCycle = function(head) {
    let map = new Map()
    let current= head
    if(!current || !current.next) return false 
    map.set(current)
    while(current){
        let tmp = current.next
        if(!map.has(tmp)){
            map.set(tmp)
        }else{
            return true
        }
        current=tmp
    }
    return false
};

/****
 * using another approach
*/
var hasCycle = function(head) {
    let map = []
    let current= head
    if(!current || !current.next) return false 
    map.push(current)
    while(current){
        let tmp = current.next
        if(map.indexOf(tmp)===-1){
            map.push(tmp)
        }else{
            return true
        }
        current=tmp
    }
    return false
};

