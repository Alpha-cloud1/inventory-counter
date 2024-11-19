
let saveEl = document.querySelector("#save-el")

let countEl = document.querySelector('#count-el')

let count = 0

function increment() {
    count ++
    console.log(count)
    countEl.textContent = count
}

function save() {

    let countStrn = count + " - "

    saveEl.textContent += countStrn

    console.log(count)

    count = 0
    countEl.textContent = count

}