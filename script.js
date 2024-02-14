let block_on = true
let button_up = true
let coins_colected = 0




function blockInteraction(fileName, fileName1) {
    if (block_on) {
        block_on = false
        let image = document.querySelector('.block')
        image.setAttribute('src', fileName)
    }
    
    if (button_up) {
        let image_button = document.querySelector('.button')
        image_button.setAttribute('src', fileName1)
    }
}

function buttonInteraction(fileName, coinImage) {
    if (block_on === false) {
        if (button_up === true) {
            button_up = false
            let image = document.querySelector('.button')
            image.setAttribute('src', fileName)

            for (let i = 0; i < 312; i++) {
                var elem = document.createElement("img");
                elem.setAttribute('src', coinImage)
                elem.setAttribute('class', 'coin')
                elem.setAttribute('onmousemove', "src='./images/blank/blank.png'")
                elem.classname = 'coin'
                document.getElementById("coinsGroup").appendChild(elem)
            }
            
            document.getElementById('coinsGroup').style.zIndex = 1
        }
    }
}



