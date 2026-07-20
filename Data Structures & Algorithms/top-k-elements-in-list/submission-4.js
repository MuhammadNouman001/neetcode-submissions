class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let occurenceCount={}

        for(let i=0; i<nums.length; i++){
            if(occurenceCount[nums[i]]){
                ++occurenceCount[nums[i]]
            }
            else{
                occurenceCount[nums[i]]=1
            }
        }

        console.log(occurenceCount)
        console.log(Object.entries(occurenceCount)) 
        console.log(Object.entries(occurenceCount).sort((a,b)=> b[1] - a[1])) 
        console.log(Object.entries(occurenceCount).sort((a,b)=> b[1] - a[1]).slice(0,k)) 
        console.log(Object.entries(occurenceCount).sort((a,b)=> b[1] - a[1]).slice(0,k).map(entry=> entry[0])) 
        return Object.entries(occurenceCount).sort((a,b)=> b[1] - a[1]).slice(0,k).map(entry=> entry[0])
    }
}
