class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const sumCheck = new Map()
        for(let i=0; i<nums.length; i++){
            let complement = target-nums[i]
            if(sumCheck.has(complement)){
                return [sumCheck.get(complement), i]
            }
            sumCheck.set(nums[i], i)
        }
    }
}
