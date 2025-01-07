// @ts-ignore
const arr: number[] = [2,2,1]

const singleNumber = (arr: number[]): number => {
   let res: number = 0;

   for(var i = 0; i < arr.length; i++) {
      res = res ^ arr[i]
   }

   return res
} // time = O(n) space = O(1)

console.log(singleNumber(arr));