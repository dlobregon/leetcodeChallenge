
/**
 * Given an array of integers, returns "indices" of the two numbers such that they add up 
 * to a specific target. You may assume that each input would have exactly one solution, and you may
 * not use the same element twice
 */

/*
var twoSum = function(nums, target){
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        for (let index2 = 0; index2 < nums.length; index2++) {
            if(index!==index2 && nums[index]+nums[index2]===target){
                return [index,index2]
            }
            
        }
        
    }
 }
*/
 var twoSum = function(nums, target){
    result=[]
    stop=false
    nums.some((v1,i1)=>{
        nums.some((v2,i2)=>{
            if(i1!==i2 && v1+v2===target){
                stop=true
                result=[i1,i2]
                return stop;
            }
        })
        return stop
    })
    return result
 }

 /** 
  * I made this solution using the Brute Force Approach
  * Complexity Analysis
  * Time complexity: O(n powers 2)
  * Space complexity: O(1)
  * 
  * Runtime: 64 ms
 */