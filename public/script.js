function onOff(){
    window.document.getElementById('modal').classList.toggle('hide')

    document.querySelector('body').classList.toggle('hideScroll')

    document.getElementById('modal').classList.toggle('addScroll')
}

function checkfield(event){
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(function(value){

        const checkIfisString = typeof event.target[value].value === "string"
        const checkIfisEmpty = !event.target[value].value.trim() 

        if(checkIfisString && checkIfisEmpty){
            return true
        }
    })

    if(isEmpty){
        event.preventDefault()
        alert("Por favor, preencha todos os dados.")
    }
}



/*document.querySelector('button.fat').addEventListener('click', function(){

                document
                .querySelector('#footer')
                .classList
                .toggle("hide")
            }) */