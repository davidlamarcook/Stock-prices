let lowestNumber = (arr) => {
    let stockArr = arr
    let min = Math.min(...stockArr)
    return min
}

let stockPrices = [15, 10, 20, 22, 1, 9]

console.log(lowestNumber(stockPrices))

let highestNumber = (arr) => {
    let stockArr = arr
    let max = Math.max(... stockArr)
    return max
}

console.log(highestNumber(stockPrices))

let stockProfit = (arr) => {
   let profit = highestNumber(arr) - lowestNumber(arr)
   return profit
}

console.log(stockProfit(stockPrices))