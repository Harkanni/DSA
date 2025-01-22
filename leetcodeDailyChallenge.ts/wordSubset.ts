const words1 = ["amazon", "apple", "facebook", "google", "leetcode"], words2 = ["leo", "lo"]

function wordSubsets(words1: string[], words2: string[]): string[] {
   // Helper function to count character frequencies in a word
   const countFrequencies = (word: string) => {
      const freq = Array(26).fill(0); // Frequency array for 'a' to 'z'
      for (const char of word) {
         freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }
      return freq;
   };

   // Calculate the maximum frequency for each character across all words in words2
   const maxFreq = Array(26).fill(0);
   for (const word of words2) {
      const freq = countFrequencies(word);
      for (let i = 0; i < 26; i++) {
         maxFreq[i] = Math.max(maxFreq[i], freq[i]);
      }
   }

   // Filter words1 to find universal strings
   const result = [];
   for (const word of words1) {
      const freq = countFrequencies(word);
      let isUniversal = true;
      for (let i = 0; i < 26; i++) {
         if (freq[i] < maxFreq[i]) {
            isUniversal = false;
            break;
         }
      }
      if (isUniversal) {
         result.push(word);
      }
   }

   return result;
}

function wordSubset2(word1: string[], word2: string[]): string[] {
   let res: string[] = []
   const countFrequencies = (word: string) => {
      const freq = new Array(26).fill(0);
      for (var char of word) {
         freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }
      return freq;
   }


   let maxFreq = new Array(26).fill(0);
   for (var word of word2) {
      let freq = countFrequencies(word)
      for (var i = 0; i < 26; i++) {
         maxFreq[i] = Math.max(maxFreq[i], freq[i]);
      }
   }

   for (var word of word1) {
      const freq = countFrequencies(word)

      let isUniversal = true;
      for (var i = 0; i < 26; i++) {
         if(freq[i] < maxFreq[i]) {
            isUniversal = false;
         }
      }

      if(isUniversal) {
         res.push(word);
      }
   }

   console.log(res);

   return []
}

// Example usage:

// console.log(wordSubsets(words1, words2)); // Output: ["facebook", "google", "leetcode"]

const words3 = ["amazon", "apple", "facebook", "google", "leetcode"];
const words4 = ["l", "e"];
// console.log(wordSubsets(words3, words4)); // Output: ["apple", "google", "leetcode"]


wordSubset2(words1, words2)