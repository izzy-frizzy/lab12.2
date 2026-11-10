import express from 'express'

const app = express();

const port = 3000;

app.get('/', (req,res) => {
    res.send('hello world')
})

app.get('/api/fun-fact', async(req, res) =>{
    try{
        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')

        const funFacts = await response.json()

        // const facts = funFacts.map((fact) => `fact:${fact.text}`)
        // console.log(funFacts)
        res.json({fact:  funFacts.text})

    }catch(e){
        res.send(e)
    }
})

app.listen(port, () => {
    console.log('server is running on port: ' + port)
})