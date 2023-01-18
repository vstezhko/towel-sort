
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = []
    matrix && matrix.map((item, index) => {
        if (index%2) {
            res.push(...item.reverse())
        } else {
            res.push(...item)
        }

    })


    return res;
}
