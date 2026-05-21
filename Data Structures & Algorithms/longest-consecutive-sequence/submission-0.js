class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) return 0
        const sortedNums = nums.sort((a,b) => a-b)
        let resArray = []
        let maxLength = 1
        for(let num of sortedNums){
            if(num === resArray[resArray.length - 1]) continue
            if((num - resArray[resArray.length - 1]) === 1){
                resArray.push(num)
                if(resArray.length > maxLength) maxLength = resArray.length
            }else{
                resArray = [num]
            }
     
        }
        return(maxLength)
    }
}
