// const message = 'Hello world'

// const iter = message[Symbol.iterator]()
// const value = iter.next()
// let curr = iter.next()

// while (curr.done === false) {
//     console.log(curr.value)
//     curr = iter.next()
// }

const codes = {
    [Symbol.iterator] () {
        let curr = 0
        return {
            next() {
                return {
                    value: Math.random(),
                    done: curr++ > 4
                }
            }
        }
    }
}

for (let code of codes) {
    console.log(code)
}

let number = 12345
console.log(number.toString()[4])


