// Problem: Number of Senior Citizens
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/number-of-senior-citizens/question?list=neetcode150

// Problem Statement:
// You are given a 0-indexed array of strings details. Each element of details provides information about a given passenger compressed into a string of length 15. The system is such that:
// The first ten characters consist of the phone number of passengers.
// The next character denotes the gender of the person.
// The following two characters are used to indicate the age of the person.
// The last two characters determine the seat allotted to that person.
// Return the number of passengers who are strictly more than 60 years old.

// Approach:
// I initialized a variable count to 0, which will keep track of the number of senior citizens.
// I iterated through the details array, and for each string, I extracted the age by taking the 11th and 12th characters (index 10 and 11) and concatenating them to form a two-digit number.
// I then checked if the age is greater than 60, and if it is, I incremented the count variable.
// Finally, I returned the count variable as the result.

// Complexity Analysis:
// - Time Complexity: O(n) -> We iterate through the details exactly once.
// - Space Complexity: O(1) -> We use constant space to store count variable.

class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;
        for (let i = 0; i < details.length; i++) {
            const number = details[i][11] + details[i][12];
            
            if(number > 60){
                count++
            }
        }

        return count
    }
}

let details = ["7868190130M7522","5303914400F9211","9273338290F4010"]


const obj = new Solution();
console.log(obj.countSeniors(details));
