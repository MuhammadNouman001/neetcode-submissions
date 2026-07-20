class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let productArr=[]
        
        for(let i=0; i<nums.length; i++){
            let temp=1
            for(let j=0; j<nums.length; j++){
                if(j!=i){
                    temp = temp * nums[j]
                }
            }
                    productArr.push(temp)
        }
        console.log(productArr)
        return productArr
    }
}
