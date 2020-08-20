var maxProfit = function(prices) {
    let minPrice = 1000000
    let maxprofit =0
    for (let i = 0; i < prices.length; i++) {
        if(prices[i]<minPrice)  minPrice =prices[i]
        else if(prices[i]- minPrice >maxprofit) maxprofit=prices[i]-minPrice
    }
    return maxprofit
};