class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const arrCheck = new Set()
        for(let i=0; i<=nums.length; i++){
            if(arrCheck.has(nums[i])){
                return true
            }
            else{
                arrCheck.add(nums[i])
            }
        }
        return false
    }
}
