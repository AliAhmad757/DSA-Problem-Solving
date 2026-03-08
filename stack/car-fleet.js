// Problem: Car Fleet
// Difficulty: Medium
// NeetCode Link: https://neetcode.io/problems/car-fleet/question

// Problem Statement:
// There are n cars traveling to the same destination on a one-lane highway.
// You are given two arrays of integers position and speed, both of length n.
// position[i] is the position of the ith car (in miles)
// speed[i] is the speed of the ith car (in miles per hour)
// The destination is at position target miles.
// A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.
// A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.
// If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.
// Return the number of different car fleets that will arrive at the destination.


// Approach:
// 1. Pair each car's position with its speed and sort the cars based on their positions in descending order.
// 2. Use a stack to keep track of the time it takes for each car (or fleet) to reach the destination.
// 3. Iterate through the sorted cars and calculate the time it takes for each car to reach the destination.
// 4. If the current car's time is less than or equal to the time of the last fleet in the stack, it means they will form a fleet, so we do not add a new fleet to the stack.
// 5. If the current car's time is greater than the time of the last fleet in the stack, it means it will form a new fleet, so we push its time onto the stack.
// 6. The number of fleets is equal to the size of the stack at the end.

// Complexity Analysis:
// - Time Complexity: O(n log n) due to the sorting step, where n is the number of cars. The rest of the operations are O(n).
// - Space Complexity: O(n) for the pairedCars array and the timeFrames stack.

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairedCars = position.map((pos, index) => {
                return { pos: pos, speed: speed[index] };
        });

        pairedCars.sort((a, b) => b.pos - a.pos);

        const timeFrames = []

        for (let i = 0; i < pairedCars.length; i++) {
            const {pos, speed} = pairedCars[i];
            const time = (target - pos) / speed;

            console.log(time, "time");    
            if(timeFrames[timeFrames.length - 1] >= time){
            }else{
                timeFrames.push(time)
            }
            
        }

        return timeFrames.length;
    }
}


const target = 10, position = [4,1,0,7], speed = [2,2,1,1]
const obj = new Solution()
console.log(obj.carFleet(target, position, speed));


