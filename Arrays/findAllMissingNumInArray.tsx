// @ts-ignore
const arr = [4, 3, 2, 7, 8, 2, 3, 1]


// const findAllMissingNumInArr = (arr: number[]): number[] => {
//    let res: number[] = [];
//    for (var i = 0; i < arr.length; i++) {
//       if (arr.includes(i + 1) === false) {
//          res.push(i + 1);
//       }
//    }

//    return res;
// } // time = O(n2) space = 0(1)



// Index search method
const findAllMissingNumInArr = (arr: number[]): number[] => {
   let res: number[] = [];

   for(var i=0; i<arr.length; i++) {
      let idx = Math.abs(arr[i]) - 1
      // let idx2 = Math.abs(arr[i]) - 1

      // console.log({"arr[i]": arr[i], idx: idx, idx2: idx2, i: i})

      arr[idx] = Math.abs(arr[idx]) * -1
      console.log(arr)
   }

   // console.log(arr)

   for (let i = 0; i < arr.length; i++) {
      if(arr[i] >= 1) res.push(i+1);
   }

   return res;
}



console.log(findAllMissingNumInArr(arr));