class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i])){
                let val = map.get(nums[i])
                map.set(nums[i],val+1)
            }else{
                map.set(nums[i],1)
            }
        }
        let arr = Array(map.entries())
        let newArr = []
        arr[0].forEach((val) => newArr.push(val) )
        console.log(newArr)
        let sortedArray = newArr.sort((a,b) => b[1] - a[1])
        let resArr = []
        sortedArray.slice(0,k).forEach((val) => resArr.push(val[0]))
        console.log(resArr)

        return resArr
    }
}


// {
//     1: 1,
//     2: 2,
//     3: 3
// }

// map.entries((a,))