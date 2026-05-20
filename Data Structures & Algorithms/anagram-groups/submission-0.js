class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        for(let str of strs) {
            const sortedStr = str.split('').sort().join('')
            if(map.has(sortedStr)){
                let currentValue = map.get(sortedStr)
                map.set(sortedStr,[...currentValue,str])

            }else{
                map.set(sortedStr,[str])
            }
        }
        
        return [...map.values()]
    }
}


// cat: [act,cat]
// opst: [pots,tops,tops]
// aht: [hat]
