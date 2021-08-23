function* myGenerator() {
    console.log('a')
    yield 1
    console.log('b')
    yield 2
    console.log('c')
    yield 3
}

const iter = myGenerator()
console.log(iter.next())
//console.log(iter.next())

function* fibonacci() {
    let n1 = 0
    let n2 = 1

    while (true) {
        let curr = n1
        n1 = n2
        n2 = curr + n1
        yield curr
    }
}

const iterable = fibonacci()
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())
console.log(iterable.next())

function* randomHexGenerator(hexVals) {
    for (hex in hexVals) {
        let random = Math.floor(Math.random()) % hexVals.length
        console.log(random)
        yield hexVals[hex]
        yield random
    
    }
}

const iter2 = randomHexGenerator([1, 2, 3, 5])
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())

