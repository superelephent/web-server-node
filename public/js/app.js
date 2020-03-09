
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.getElementById('#message-1')
const messageTwo = document.getElementById('#message-2')
const butt=document.querySelector('button')

butt.addEventListener('click',(e)=>{
  e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.address
              
              }
            })
        })

        
    })




    


 