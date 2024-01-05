const input = document.querySelector('input')
const btns = document.querySelectorAll('.btns')
const delet = document.querySelector('.btn-del')
const reset = document.querySelector('.btn-reset')
const equal = document.querySelector('.btn-equal')
console.log();
let str = ""
btns.forEach((button, index) => {
    button.addEventListener('click', () => {
        button.innerHTML === 'x' ? str += '*' : str += button.innerHTML
        input.value = str
    })
})
//evaluation of expression function
function solve(string) {
    string = string.replaceAll(' ', '')
    return eval(string)
}
//expression evalution and error handeling
equal.addEventListener('click', () => {
    try {
        let num=solve(str)
        input.value =Math.round(num*1000)/1000
        str = ""
    } catch (e) {
       alert("WRONG EXPRESSION Please Reset!!")
    }
    // console.log("errr");
})

//resetting input values
reset.addEventListener('click', () => {
    input.value = ""
    str = ""
})
//del key process
delet.addEventListener('click', () => {
    str = str.slice(0, -1)
    input.value = str
})



