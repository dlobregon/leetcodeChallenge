/**
 * Container with most water
 *  
 * Given "n" non negative integers: a1, a2, a3,.., an, where each represents a point in coordinate
 * (i,ai). "n" vertical lines are drawn such that two endpoints of line "i" is at (i,ai) and (i, 0)
 * 
 * **/

 let maxArea = (height)=>{
    let maxarea =0, start =0, stop =height.length-1;
    while(start<stop){
        let tmpArea=(height[start]<height[stop]? height[start]:height[stop])*(stop-start)
        maxarea= tmpArea>maxarea? tmpArea:maxarea
        if(height[start]<height[stop]) start++; else stop--;
    }
    return maxarea
 }