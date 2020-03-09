const express=require('express')
const path=require('path')
const hbs=require('hbs')
const request=require('request')
const geocode=require('./utils/geocode')

const app=express()

const publicDirectory=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')

hbs.registerPartials(partialPath)

app.set('view engine','hbs')
app.set('views',viewsPath)
app.use(express.static(publicDirectory))






 app.get('',(req,res)=>{


    res.render('index',{title:'Homepage',
footertext:"footer"})
  
})




app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, call = {}) => {
        if (error) {
            return res.send({ error })
        }

            res.send({
        
                address: call.location
            })
        
    })
})



 app.get('/about',(req,res)=>{
   res.send({name:'name',
address:{
    vill:"village",
    town:'town'
}
})

 })




app.listen(3000)
