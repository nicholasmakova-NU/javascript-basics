// rest params

function print(age, position, siblings, ...arr) {
    age
    position
    siblings
    console.log(arr)
}

print(1, 2, 3, 'hello', 'world', {})

function display(...args) {
    args = ['<br>', ...args, '<br>']
    console.log(args.join(' '))
}

const message = 'hello world!'
const chars = [...message]
chars

function add(a, b) {
    a
    b
    return a + b
}

const arr = [1, 2]
console.log(add(...arr))


display('hello', 'world', 1, 2, 3)

const array = []

array.push(1)
array.push(...[5, 6, 7])
array

const array2 = [...array]
array2
array2.pop(6)
array2
array
const array3 = array
array3.pop(7)
array3
array

const numbers = [5, 8, 1, 2]
const max = Math.max(...numbers)
const min = Math.min(...numbers)
max
min