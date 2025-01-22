// @ts-ignore
let arr = [7, 9, 12, 11, 3]

const bubbleSort = (arr: number[]): number[] => {
   for (var i = 0; i < arr.length - 1; i++) {

      for (var j = 0; j < arr.length - i - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
         }
      }
   }

   console.log(arr);
   return arr
}

bubbleSort(arr)