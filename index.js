// get Settings
const inputIdInstance = document.getElementById("idInstance");
const inputApiTokenInstance = document.getElementById("apiTokenInstance");

const buttonGetSettings = document.getElementById("getSettings");
const buttonGetStateInstance = document.getElementById("getStateInstance");

// message
const inputMessagePhone = document.getElementById("messagePhone");
const inputMessageText = document.getElementById("messageText");

const buttonSendMessage = document.getElementById("messageSend");

// file
const inputFilePhone = document.getElementById("filePhone");
const inputFileLink = document.getElementById("fileLink");

const buttonSendFile = document.getElementById("fileSend");

// output
const ouput = document.getElementById("output");

// getInstance
let idInstance
let apiTokenInstance

buttonGetSettings.addEventListener('click', () => {
    idInstance = inputIdInstance.value || idInstance || alert('empty idInstance')
    apiTokenInstance = inputApiTokenInstance.value || apiTokenInstance || alert('empty apiTokenInstance')

    let url = `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`

    fetch(url)
    .then(data => data.json())
    .then(data => {
        output.textContent = JSON.stringify(data, null, 2)
    })
    .catch(error => {
        alert("some error")
        console.log(error)
    })

})

buttonGetStateInstance.addEventListener('click', () => {
    idInstance = inputIdInstance.value || idInstance || alert('empty idInstance')
    apiTokenInstance = inputApiTokenInstance.value || apiTokenInstance || alert('empty apiTokenInstance')

    let url = `GET https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`

    fetch(url)
    .then(data => data.json())
    .then(data => {
        output.textContent = JSON.stringify(data, null, 2)
    })
    .catch(error => {
        alert("some error")
        console.log(error)
    })
})

let messagePhone
let messageText

buttonSendMessage.addEventListener('click', () => {
    messagePhone = inputMessagePhone.value || messagePhone || alert('empty messagePhone')
    messageText = inputMessageText.value || messageText || alert('empty messageText')

    let url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`

    let data = {
        chatId: `${messagePhone}@c.us`,
        message: messageText,
    }

    let options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(url, options)
    .then(data => data.json())
    .then(data => {
        output.textContent = JSON.stringify(data, null, 2)
    })
    .catch(error => {
        alert("some error")
        console.log(error)
    })
})

let filePhone
let fileLink

buttonSendFile.addEventListener('click', () => {
    filePhone = inputFilePhone.value || filePhone || alert('empty filePhone')
    fileLink = inputFileLink.value || fileLink || alert('empty fileLink')

    let url = `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`

    let data = {
        chatId: `${filePhone}@c.us`,
        urlFile: fileLink,
        fileName: fileLink.split("/").pop()
    }

    let options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(url, options)
    .then(data => data.json())
    .then(data => {
        output.textContent = JSON.stringify(data, null, 2)
    })
    .catch(error => {
        alert("some error")
        console.log(error)
    })
})