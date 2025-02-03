class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        size = len(nums)
        ans = 1
        increasing = 1
        decreasing = 1
        # total = 0

        


        for i in range(1, size):
            if nums[i] > nums[i - 1]:
                increasing += 1
                decreasing = 1
                # total += 1
            elif nums[i] < nums[i - 1]:
                decreasing += 1
                increasing = 1
            else:
                increasing = 1
                decreasing = 1
            ans = max(ans, increasing, decreasing)

        return ans


# time complexity is O(n) - Big O notation, typically represented as O(N) is a concept, in computer science and mathematics that allows us to analyze and describe the efficiency of algorithms.
# find the length of the strictly increasing and strictly decreasingarray
# currMax and currMin is to keep track of the range of our current subarray
# currMax and currMin starting position
# Go throw the array with a for loop
# If statment for the decreasing and increasing
