class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagramMap= {}
        for(let i=0; i<strs.length; i++){
            let key = strs[i].split('').sort().join('')
            if(anagramMap[key]){
            anagramMap[key].push(strs[i])
            }
            else{
                anagramMap[key]=[strs[i]]
            }
        }
console.log(anagramMap)
return Object.values(anagramMap)
    }
}
