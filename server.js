import express from 'express'

const app = express();

const port = 3000;

app.get('/', (req,res) => {
    res.send('hello world')
})

app.get('/api/fun-fact', async(req, res) =>{
    try{
        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
         
        if (!response.ok) {
            throw new Error(`API responded with status ${response.status}`)
        }

        const funFacts = await response.json()

        // const facts = funFacts.map((fact) => `fact:${fact.text}`)
        // console.log(funFacts)
        res.json({fact:  funFacts.text})

    }catch(e){
       console.error(error)
        res.status(500).json({ error: "Could not fetch fun fact" })
    }
})

app.listen(port, () => {
    console.log('server is running on port: ' + port)
})