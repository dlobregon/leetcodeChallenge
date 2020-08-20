/** 
 * suppose an array sorted  in ascending order is rotated ar some pivot unknow to you beforehand
 * You may assume no duplicate exists in the array.
 * 
 */
let findMin=(nums)=>{
    var min=nums[0]
    nums.splice(1,nums.length-1).some(function(num){
        if(num<min){
            min=num
            return true
        }
    })
    return min
}