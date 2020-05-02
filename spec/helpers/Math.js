export default class {
    static delta(a, b, c) {
        return (b * b) - (4 * a * c)
    }

    static bhaskara(a, b, c) {
        if (this.delta(a, b, c) >= 0) {
            return [ ((b * -1) + Math.sqrt(this.delta(a, b, c)) / (2 * a)),
                     ((b * -1) - Math.sqrt(this.delta(a, b, c)) / (2 * a))]
        }
    }

    static factorial(num) {
        let result = 1
        for (let i = 2; i <= num; i++)
            result *= i
        return result
    }
    
    oddEven(num) {
        return num / 2 & 1
    }
}