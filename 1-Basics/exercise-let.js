let largestString;

function findLargestString(strings) {
    let largestLen = 0
   console.log(strings.length)
   for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > largestLen) {
            largestLen += strings[i].length
            largestString = strings[i]
        }
   }
}
const str = ['computers', 'northrise', 'university', 'population', 'cantankerous']
findLargestString(str)

console.log(largestString)