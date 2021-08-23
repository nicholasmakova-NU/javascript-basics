var age = 10
var name = 'Bob'

var msg = `My name is ${name}. And I am ${age} years old`
msg

var msg2 = `hello! My name is
Bob and my age is
10`
msg2

const activities = [
    'running',
    'jumping',
    'swimming'
]

const msg3 = `My name is Bob and I enjoy ${activities.map(function(activity) {
    return `${activity}!`
}).join(', ')}`

console.log(msg3)


function tag(strings, ...values) {
    console.log(strings)
    console.log(...values)

    let message = ''
    strings.forEach((string, index) => {
        message += string
        if (index < values.length) {
            message += `<b>${values[index]}</b>`
        }
    });

    return message
}

const name2 = 'bob'
const age2 = 20

const msg4 = tag `Hello my name is ${name2}. My age is ${age2}.`
console.log(msg4)


const names10 = ['roger', 'alex', 'bob']
const msg10 = `Will the follwoing ${names10.length} students please report to the office: ${names10.join(', ')}`
msg10

function underscore(strings, ...values) {
    return strings[0].replace(/\s/g, '_')
}

const msg11 = underscore`there      is no cow level`

console.log(msg11)

function sumItUp(strings, ...values) {
    console.log(strings)
    console.log(values)

    let sum = 0

    values.forEach(number => {
        sum += number
    })
    return `The total sum was $${sum}`
}

const value = sumItUp`The values to be added are ${40} and ${60} and ${100}, with the addition of ${10.45}`
console.log(value)
