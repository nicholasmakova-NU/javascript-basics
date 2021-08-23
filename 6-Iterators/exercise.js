const obj = {
    number: 53820391,
    [Symbol.iterator] () {
        let index = 0
        let numStr = this.number.toString()
        return {
            next() {
                return {
                    value: numStr[index],
                    done: index++ >= numStr.length
                }
            }
        }
    }
}

for (let o of obj ) {
    o
}