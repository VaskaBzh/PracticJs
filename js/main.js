'use strict'

const select = document.querySelector('select')
const form = document.querySelector('form')
const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const date = document.querySelector('#date')
const post = document.querySelector('#post')
const check = document.querySelector('#check')
const table = document.querySelector('table')

const worker = []

const getChildren = () => {
    if (check.checked) {
        return 'Есть'
    } else {
        return 'Нет'
    }
}    

const render = () => {  

    worker.forEach((item, index) => {
        if(item.name != '' & item.surname != '' & item.date != '' & item.post != '') {
            const tr = document.createElement('tr')

            tr.innerHTML = '<td>' + item.work + '</td>' + '<td>' + item.name + '</td>' + '<td>' + item.surname + '</td>' + '<td>' + item.date + '</td>' + '<td>' + item.post + '</td>' + '<td>' + item.children + '</td>' + '<td id="del">Удалить</td>'

            table.append(tr)

            tr.querySelector('#del').addEventListener('click', () => {
                tr.remove()
                worker.splice(index, 1)
            })
        }
    })
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
    name.value = ''
    surname.value = ''
    date.value = ''
    post.value = ''
    check.checked = false
    select.value = 1

    render()
})
