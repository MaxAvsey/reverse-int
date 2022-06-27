module.exports = function reverse (n) {
    let result = n.toString().split('',).reverse().join('').slice(0,3)
    return result
}
