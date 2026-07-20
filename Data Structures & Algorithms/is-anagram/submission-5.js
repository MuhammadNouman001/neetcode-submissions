class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length){
            return false
        }

        const charKeep = {}

        for(let i=0; i<=s.length; i++){
            if(charKeep[s[i]]){
                ++charKeep[s[i]]
            }else{
                charKeep[s[i]]=1
            }
        }
        for(let j=0; j<=t.length; j++){
            if(charKeep[t[j]]){
                charKeep[t[j]]--
            }
        }
        for(let key in charKeep){
            if(charKeep[key]!=0){
                return false
            }
        }
        return true
    }
}
