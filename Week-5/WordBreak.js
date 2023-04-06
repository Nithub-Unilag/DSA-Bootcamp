/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // create a hash set for fast lookup of words in the dictionary
    let wordSet = new Set(wordDict);
    // create an array to store whether each substring up to index i can be segmented into dictionary words
    let canBeSegment = new Array(s.length + 1).fill(false);
    // empty string can be segmented into a dictionary word
    canBeSegment[0] = true;
    // iterate over all possible substrings of s
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            // check if substring up to index j can be segmented into dictionary 
            // words and if the remaining substring j+1 to i is in the dictionary
            if (canBeSegment[j] && wordSet.has(s.slice(j, i))) {
                // substring up to index i can be segmented into dictionary words
                canBeSegment[i] = true;
                // no need to check further for this substring
                break;
            }
        }
    }
    // return whether the entire string can be segmented into dictionary words
    return canBeSegment[s.length];
};
