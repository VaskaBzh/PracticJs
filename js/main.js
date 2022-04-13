'use strict'

const select = document.querySelector('select')
const form = document.querySelector('form')
const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const date = document.querySelector('#date')
const post = document.querySelector('#post')
const check = document.querySelector('#check')
const table = document.querySelector('table')

let worker = []

const getChildren = () => {
    if (check.checked) {
        return 'Есть'
    } else {
        return 'Нет'
    }
}    

const tableCreate = () => {
    worker.forEach((item, index) => {
        if(item.name != '' & item.surname != '' & item.date != '' & item.post != '') {
            const tr = document.createElement('tr')

            tr.innerHTML = '<td>' + item.work + '</td>' + '<td>' + item.name + '</td>' + '<td>' + item.surname + '</td>' + '<td>' + item.date + '</td>' + '<td>' + item.post + '</td>' + '<td>' + item.children + '</td>' + '<td id="del">Удалить</td>'

            table.append(tr)

            tr.querySelector('#del').addEventListener('click', () => {
                tr.remove()
                worker.splice(index, 1)
                localStorage.setItem('worker', JSON.stringify(worker))
            })
        }
    })
}

const cache = () => {
    if (localStorage.getItem('worker') != null) {
        worker = JSON.parse(localStorage.getItem('worker'))
    
        tableCreate()
    }
}

const render = () => {  
    table.innerHTML = '<tr><th>Профессия</th><th>Имя</th><th>Фамилия</th><th>Дата принятия</th><th>Разряд</th><th>Дети</th><th>Удалить</th></tr>'

    tableCreate()
}

form.addEventListener('submit', () => {
    event.preventDefault()

    const newWorker = {
        name: name.value,
        surname: surname.value,
        date: date.value,
        post: post.value,
        children: getChildren(),
        work: select.options[select.selectedIndex].textContent
    }

    if (newWorker.name != '' & newWorker.surname != '' & newWorker.date != '' & newWorker.post != '') {
        worker.push(newWorker)
        localStorage.setItem('worker', JSON.stringify(worker))

        console.log(worker)

        name.value = ''
        surname.value = ''
        date.value = ''
        post.value = ''
        check.checked = false
        select.value = 1
    }

    render()
})

cache()