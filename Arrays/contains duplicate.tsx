// @ts-ignore
const arr = [1, 2, 3, 4, 1]

// const containsDuplicate = (arr) => {
//    for (var i = 0; i < arr.length - 1; i++) {
//       for (var j = i; j < arr.length; j++) {
//          if (arr[i] === arr[j + 1]) {
//             return true
//          }
//       }
//    }
//    return false
// } // Time = O(n2); space = O(1)


// const containsDuplicate = (arr) => {
//    var hash = {};
//    for (var i = 0; i < arr.length; i++) {
//       if (hash[arr[i]] === true) {
//          return true;
//       } else {
//          hash[arr[i]] = true;
//       }
//    }
//    return false
// } // Time = O(n); space = O(n);


const containsDuplicate = (arr: number[]) => {
   for(var i=0; i<arr.length; i++) {
      let idx = Math.abs(arr[i] - 1)

      arr[idx] = Math.abs(arr[i]) * -1
      console.log(arr)
   }


   for(var i=0; i<arr.length; i++) {
      if(arr[i] > 0) {
         return true
      }
   }

   return false
} // Time = O(n) Space = O(1)


console.log(containsDuplicate(arr))