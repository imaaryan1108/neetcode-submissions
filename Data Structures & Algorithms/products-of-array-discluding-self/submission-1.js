class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixProduct = 1
        let suffixProduct = 1
        let prefixArray = [1]
        for(let i=1;i<nums.length;i++){
            prefixProduct *=  nums[i-1]
            prefixArray.push(prefixProduct)
        }
        for(let i = nums.length - 2; i>=0; i--){
            suffixProduct *=  nums[i+1]
            prefixArray[i] = prefixArray[i]*suffixProduct
        }
        return prefixArray
    }
}
