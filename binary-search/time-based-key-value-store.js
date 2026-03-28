// Problem: Time Based Key-Value Store
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/time-based-key-value-store/question

// Problem Statement:
// Implement a time-based key-value data structure that supports:

// Storing multiple values for the same key at specified time stamps
// Retrieving the key's value at a specified timestamp
// Implement the TimeMap class:

// TimeMap() Initializes the object.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns the most recent value of key if set was previously called on it and the most recent timestamp for that key prev_timestamp is less than or equal to the given timestamp (prev_timestamp <= timestamp). If there are no values, it returns "".
// Note: For all calls to set, the timestamps are in strictly increasing order.

// // Approach:
// We can use a hash map to store the key-value pairs, where the key is the string key and the value is an array of objects containing the value and its corresponding timestamp. For the get operation, we can perform a binary search on the array of values for the given key to find the most recent value that has a timestamp less than or equal to the given timestamp.

// Complexity Analysis:
// - Time Complexity: O(log n), where n is the number of elements in the input array. This is because we are performing a binary search, which divides the search space in half at each step.
// - Space Complexity: O(1), since we are using only a constant amount of extra space for the pointers and variables.


class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push({ value, timestamp });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key);

        if(!values || values.length === 0){
            return ""
        }

        let left = 0;
        let right = values.length - 1;
        let result = ""

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if(values[mid].timestamp <= timestamp){
                result = values[mid].value

                left = mid + 1
            }
            else{
                right = mid - 1
            }
        }

        return result
    }
}

const obj = new TimeMap()
obj.set("foo", "bar", 1)
console.log(obj.get("foo", 1)); // returns "bar"
console.log(obj.get("foo", 3)); // returns "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar"
obj.set("foo", "bar2", 4)
console.log(obj.get("foo", 4)); // returns "bar2"
console.log(obj.get("foo", 5)); // returns "bar2"
