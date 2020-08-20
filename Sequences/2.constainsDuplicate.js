/*var containsDuplicate = function(nums) {
    nums.sort()
    var pool=[]
    var result=false
    nums.some(element=>{
        if(pool.indexOf(element)>-1){
            result=true
            return result
        }
        pool.push(element)
    })
    return result
};
*/
var containsDuplicate=function(nums){
    return [...new Set(nums)].length !==nums.length    
}
