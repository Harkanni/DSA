function quickSort(arr: number[], low = 0, high = arr.length - 1): number[] {
   if (low < high) {
      let pivot = partition(arr, low, high)

      quickSort(arr, low, pivot - 1)
      quickSort(arr, pivot + 1, high)
   }

   return arr
}

function partition(arr: number[], low: number, high: number): number {
   let pivot = arr[high]
   let i = low - 1;

   for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
         i++
         [arr[j], arr[i]] = [arr[i], arr[j]]
      }
   }

   [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
   return i + 1
}

quickSort([7, 9, 12, 11, 3])