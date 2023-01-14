/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // an empty hash map to store the anagrams
    let map = {}; 
        for (let i = 0; i < strs.length; i++) {
            // get the current word from the input array
            let word = strs[i]; 
            // sorting the characters of the word to create a unique key for anagrams
            let key = word.split('').sort().join(''); 
            // if the key doesn't exist in the map, create an empty array
            if (!map[key]) map[key] = []; 
            // add the word to the array of anagrams for that key
            map[key].push(word); 
        }

        // return the array of anagrams
        return Object.values(map); 
};
