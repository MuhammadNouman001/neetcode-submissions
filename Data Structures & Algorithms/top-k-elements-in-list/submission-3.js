class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let occurenceCount={}
        let result=[]

        for(let i=0; i<nums.length; i++){
            if(occurenceCount[nums[i]]){
                ++occurenceCount[nums[i]]
            }
            else{
                occurenceCount[nums[i]]=1
            }
        }
        console.log(occurenceCount)
        console.log(Object.entries(occurenceCount).sort((a, b) => b[1] - a[1]).slice(0, k))
        return Object.entries(occurenceCount).sort((a, b) => b[1] - a[1]).slice(0, k).map((entry)=>{
            return entry[0]
        })
        // for(let value in occurenceCount){
        //     console.log(value, 'value here')
        //     if(occurenceCount[value]>=k){
        //         result.push(value)
        //     }
        // }
        // console.log(result)
        // return result
    }
}
