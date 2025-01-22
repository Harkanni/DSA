function canBeValid(s: string, locked: string): boolean {
   if (s.length % 2 !== 0) {
      // A valid parentheses string must have an even length.
      return false;
   }

   let openBalance = 0; // Tracks how many '(' are available for matching.
   let closeBalance = 0; // Tracks how many ')' are available for matching.

   // Forward pass to check if the string can have enough '(' to balance ')'.
   for (let i = 0; i < s.length; i++) {
      if (locked[i] === '0' || s[i] === '(') {
         // Unlocked or '(' contributes to open balance.
         openBalance++;
      } else {
         // Locked ')' contributes to reducing open balance.
         openBalance--;
      }

      if (openBalance < 0) {
         // At no point should ')' exceed '(' in the forward pass.
         return false;
      }
   }

   // Backward pass to check if the string can have enough ')' to balance '('.
   for (let i = s.length - 1; i >= 0; i--) {
      if (locked[i] === '0' || s[i] === ')') {
         // Unlocked or ')' contributes to close balance.
         closeBalance++;
      } else {
         // Locked '(' contributes to reducing close balance.
         closeBalance--;
      }

      if (closeBalance < 0) {
         // At no point should '(' exceed ')' in the backward pass.
         return false;
      }
   }

   // If both passes are successful, the string can be valid.
   return true;
}

const s = "))()))", locked = "010100"

console.log(canBeValid(s, locked));