class Solution {
  /**
   * @param {number} n
   * @return {boolean}
   */
  armstrong(n) {
    if (n === 0) return true; 
    
    const length = Math.floor(Math.log10(n)) + 1;
    
    let num = n;
    let result = 0;
    
    while (num > 0) {
      const lastDigit = num % 10;
      result += lastDigit ** length; 
      num = Math.floor(num / 10);
    }
    
    return result === n; 
  }
}

const n = 1634;
const obj = new Solution();
console.log(obj.armstrong(n)); 