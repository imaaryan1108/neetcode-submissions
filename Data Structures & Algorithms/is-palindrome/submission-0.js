class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let regex = "^[a-zA-Z0-9]+$"
        let i = 0
        let j = s.length - 1
        while(i <=j) {
            if(!s[i].match(regex)) {
                i++
                continue
            }
             if(!s[j].match(regex)) {
                j--
                continue
            }
            if(s[i].toLowerCase() !== s[j].toLowerCase()) return false
            i++
            j--
        }
        return true
    }
}
