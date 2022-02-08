require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const {TOKEN, SERVER_URL} = process.env
const TELEGRAM_API = 'https://api.telegram.org/bot'+TOKEN
const URI = '/webhook/telegram/'+TOKEN

const WEBHOOK_URL=  SERVER_URL+URI



const app = express()

app.use(bodyParser.json())
const init = async ()=>{
    console.log(TELEGRAM_API+'/setWebhook?url='+WEBHOOK_URL)
    const res = await axios.get(TELEGRAM_API+'/setWebhook?url='+WEBHOOK_URL)
    console.log(res.data)
}

app.post(URI, async (req, res)=>{
    console.log(req.body)

    return req.send()
})

app.listen(process.env.PORT || 5000, async ()=>{
    console.log('APP STARTED ON : ',process.env.PORT ||5000 )
    await init()
})
