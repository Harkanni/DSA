const words = ["mass", "as", "superhero", "hero"]

function stringMatching(words: string[]): string[] {
   let res: string[] = []
   let n: number = words.length;
   for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
         if (i !== j && words[j].includes(words[i])) {
            console.log(words[i], words[j]);
            res.push(words[i]);
            break;
         }
      }
   }
   console.log(res)
   return res
};

console.log(stringMatching(words));