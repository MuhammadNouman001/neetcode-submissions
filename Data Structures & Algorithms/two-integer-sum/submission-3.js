class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sumIndice=[]
        let sumMap={}

        for(let i=0; i<nums.length; i++){
            let temp = target-nums[i]
            if(sumMap[temp]!== undefined){
                return [sumMap[temp], i]
            }
            else{
                sumMap[nums[i]]=i
            }
        }
    }
}
