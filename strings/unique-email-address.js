// Problem: Unique Email Addresses
// Difficulty: Easy
// NeetCode Link: https://neetcode.io/problems/unique-email-addresses/question

// Problem Statement:
// A valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@neetcode.io", "alice" is the local name, and "neetcode.io" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

// For example, "alice.z@neetcode.io" and "alicez@neetcode.io" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.
// You are given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

// Approach:
// We can use a Set to store unique email addresses. For each email, we split it into the local name and domain name using the '@' character. Then, we further split the local name by the '+' character to ignore any characters after the first '+'. Next, we remove all '.' characters from the local name. Finally, we concatenate the processed local name with the domain name and add it to the Set. After processing all emails, the size of the Set will give us the number of unique email addresses that receive mails.


// Complexity Analysis:
// - Time Complexity: O(n * m) where n is the number of emails and m is the average length of the email string, since we need to process each email and perform string operations on it.
// - Space Complexity: O(n) in the worst case, if all processed email addresses are unique, we will store all of them in the Set.

class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const uniqueElements = new Set()
        for (let i = 0; i < emails.length; i++) {
            const [beforeElement, afterElement] = emails[i].split("@");
            const [beforePlus] = beforeElement.split("+")
            const removeDots = beforePlus.replaceAll(".", "")
            const str = removeDots + "@" + afterElement
            uniqueElements.add(str)
        }

        return uniqueElements.size
    }
}


const emails = ["a@neetcode.com","b@neetcode.com","c@neetcode.com"]

const obj = new Solution()
console.log(obj.numUniqueEmails(emails));