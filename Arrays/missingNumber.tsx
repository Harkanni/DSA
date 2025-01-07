// @ts-ignore
const arr = [9,6,4,2,3,5,7,0,1]

// Brute Force Approach

// const missingNumber = (arr: number[]) => {
//    for (var i = 0; i <= arr.length; i++) {
//       if (arr.includes(i) === false) {
//          return { message: "missing number found", value: i };
//       }
//    }

//    return { message: "no missing number found", value: null };
// } // time = O(n2) space = 0(1)

// Using the index method
// const missingNumber = (arr: number[]) => {
//    var t_array: number[] = new Array(arr.length + 1).fill(0);

//    for (var i = 0; i < arr.length; i++) {
//       let idx = arr[i]
//       t_array[idx] = -1
//    }

//    for (var i = 0; i < t_array.length; i++) {
//       if(t_array[i] !== -1) {
//          return { message: "missing number found", value: i };
//       }
//    }

//    console.log(t_array)
//    return { message: "no missing number found", value: null };
// } // time = O(n) space = 0(n)


// const missingNumber = (arr: number[]): { message: string, value: number | null } => {
//    let res: number = arr.length;

//    for (var i = 0; i < arr.length; i++) {
//       res = res ^ i ^ (arr[i]);
//    }

//    return { message: `${res} missing number found`, value: res };
// } // time = O(n) space = 0(1)


const missingNumber = (arr: number[]): { message: string, value: number | null } => {
   let res = arr.length 

   for(var i = 0; i < arr.length; i++) {
      res = res + i - arr[i]
   }

   console.log(res)


   return { message: "no missing number found", value: null };
} // time = O(n) space = 0(1)


console.log(arr.includes(2))

console.log(missingNumber(arr))