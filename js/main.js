'use strict'

const select = document.querySelector('select')
const form = document.querySelector('form')
const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const date = document.querySelector('#date')
const post = document.querySelector('#post')
const check = document.querySelector('#check')
const table = document.querySelector('table')

// const tableElement = document.querySelectorAll('td')

const worker = []

const getChildren = () => {
    if (check.checked) {
        return 'Есть'
    } else {
        return 'Нет'
    }
}    

form.addEventListener('submit', () => {
    const newWorker = {
        name: name.value,
        surname: surname.value,
        date: date.value,
        post: post.value,
        children: getChildren(),
        work: select.options[select.selectedIndex].textContent
    }

    event.preventDefault()

    if (newWorker.name != '' & newWorker.surname != '' & newWorker.date != '' & newWorker.post != '') {
        worker.push(newWorker)
        localStorage.setItem('workers', JSON.stringify(worker))
        console.log(worker)
    }
})
