const operatorLength = 2
const operatorEnd = "]"
window.$ = query => {
    if (query.length < operatorLength + 1) throw new Error(`Attempted query without an operator and ${operatorEnd}\n${query}`)
    let params = query.slice(operatorLength + 1)
    if (query[operatorLength] !== operatorEnd) throw new Error(`Attempted query without a ${operatorEnd} after the operator\n${query}`)
    switch (query.slice(0, operatorLength)) {
        case "el":
            return document.querySelector(params)
        case "EL":
            return document.querySelectorAll(params)
        default:
            throw new Error(`Attempted query with invalid operator!\n${query}`)
    }
}
