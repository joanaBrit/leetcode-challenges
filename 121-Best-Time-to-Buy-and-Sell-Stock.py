class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        min_price = prices[0]
        
        for i in range(len(prices)):
            cur_price = prices[i]
            if cur_price < min_price:
                min_price = cur_price

            profit = cur_price - min_price
            if (profit > max_profit):
                max_profit = profit

        return max_profit

# Start with the first price 
# Find the min price for each day
# Choose a day to sell it, where the profit will be higher
# Maximum profit we can achieve from this transition