// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

const sumZero = (arr) => {
    // let sumZero = arr.sort((a, b) => a - b)
    let left = 0;
    let right = arr.length-1;

    for(let i=0; i<arr.length; i++) {
        let sum = arr[left] + arr[right]
        // console.log(arr[left])
        // console.log(sum)
        // console.log(arr[right])
        if(sum === 0 && left < right) {
            return true
        }else if(sum < 0) {
            left++
        }else if(sum > 0) {
            right --
        }
    }
    return false
}
console.log(sumZero([]))
console.log(sumZero([1]))
console.log(sumZero([1, 2, 3]))
console.log(sumZero([1, 2, 3, -2]));
//Time Complexity: O(nLogn) 
//Space Complexity: O(1)


const uniqueChar = (word) => {
    let hasUniqueChar = new Set([])
    for(let i=0; i<word.length; i++) {
        hasUniqueChar.add(word[i])
        // console.log(hasUniqueChar);
    }
    // console.log(hasUniqueChar.size)
    return hasUniqueChar.size === word.length
}

console.log(uniqueChar("Monday"));
console.log(uniqueChar("Moonday"));
  //Time Complexity: O(n) 
  //Space Complexity: O(n)



  const pangram = (sentence) => {
      let obj = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0,
    }
  
    for(let i=0; i<sentence.length; i++){
      obj.hasOwnProperty(sentence[i]) ? obj[sentence[i]] += 1 : obj[sentence[i]] = 1
    }
    return Object.values(obj).every((el)=>el>=1)
  }
  console.log(pangram("The quick brown fox jumps over the lazy dog!"))
  console.log(pangram("I like cats, but not mice"))
  //Time Complexity: O(n) 
  //Space Complexity: O(n)


  const longWord = (str) => {
   let longest = 0;

   for(let word of str) {
    // console.log(word.length)
    if(longest < word.length) {
        longest = word.length
        // console.log(longest)
    }
   }
   return longest
  }

  console.log(longWord(['hi', 'hello']))
   //Time Complexity: O(n)
  //Space Complexity: O(1)