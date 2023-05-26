const list = document.querySelector('.list__filt'), 
    items = document.querySelectorAll('.blocks__item')
    listItems = document.querySelectorAll('.list__item')

function filter(){
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target
        
        listItems.forEach(listItem => listItem.classList.remove('active'))
        target.classList.add('active')

        if(target.classList.contains('list__item')){
            target.classList.add('active')
        }
            

        switch(targetId){
            case 'all':
                getItems(blocks__item)
                break
            case 'f1':
                getItems(targetId)
                break
            case 'f2':
                getItems(targetId)
                break
            case 'f3':
                getItems(targetId)
                break
            case 'f4':
                getItems(targetId)
                break                
        }
    })
}
filter()

function getItems(className){
    items.forEach(item =>{
        if (item.classList.contains(className)){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

