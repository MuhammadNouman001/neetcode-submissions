class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = []
        const pair = {
            ')': '(',
            '}': '{',
            ']': '['
        }

    for(let i=0; i<s.length; i++){
        let char = s[i]
        if(char == '(' || char == '{' || char == '['){
            stack.push(char)
        }

        else{
            if(stack.length == 0 || stack.pop()!==pair[char]){
            return false
            }
        }
    }
    return stack.length === 0


    }
}
