
            let wrapper = document.querySelector('.workapp__block') //здесь в переменную запихиваем тот элемент, в который будем выводить данные
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    
    xmlhttp.open('GET', 'fridges.xml', false)
    xmlhttp.send()
    xmlDoc = xmlhttp.responseXML
    let items = xmlDoc.querySelectorAll('card') //достаём данные из xml
    let images = xmlDoc.querySelectorAll('img')
    let name = xmlDoc.querySelectorAll('name')
    let price = xmlDoc.querySelectorAll('cost')
    let ref = xmlDoc.querySelectorAll('ref')
    //в этом цикле выводим данные на страницу
    for (let i = 0; i < items.length; i++) {
        wrapper.innerHTML += `<div class="workapp--item"><div class="workapp__img"><object class="logo1" data="${images[i].innerHTML}" type="image/svg+xml"></object></div>
        <div class="workapp__txt"><a href="${ref[i].innerHTML}"><h2> ${name[i].innerHTML}<h2></a><h2>${price[i].innerHTML}</h2></div>
            </div>`
    }

