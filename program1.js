function longestSubstring(s) {
    // Implementation of longestSubstring function
    let ans = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const temp = s.substring(i, j + 1);
            if (containsUnique(temp)) {
                if (temp.length > ans.length) {
                    ans = temp;
                }
            }
        }
    }
    return ans.length;
}

function containsUnique(str) {
    const charSet = new Set();
    for (let char of str) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}

module.exports = { longestSubstring };


