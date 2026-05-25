class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map()
        let maxLength = 0
        let i = 0
        for(let j = 0; j<s.length;j++){
            if(map.has(s[j]) && map.get(s[j]) >= i){
                i = map.get(s[j]) + 1
            }
            map.set(s[j],j)
            let length = j -i  + 1
            if(length > maxLength) maxLength = length
        }
        return maxLength
    }
}


