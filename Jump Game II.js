var jump = function(nums) {
    const n = nums.length;
    if(n === 1){
        return 0;
    }

    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for(let i = 0; i < n; i++){
        farthest = Math.max(farthest, i + nums[i]);

        if(i === currentEnd){
            jumps++;
            currentEnd = farthest;

            if(currentEnd >= n - 1){
                return jumps;
            }
        }
    }

    return jumps;
};

//Example usage:
console.log(jump([2,3,1,1,4]));
console.log(jump([2,3,0,1,4]));