const express = require('express');

const app = express();  
app.use(express.json());

const quizzes = {
    generals : [
       { 
        'id': '1',
        'question': 'What is the capital of France?',
        'options': ['Paris', 'Berlin', 'London', 'Madrid'],
        'answer': 'Paris'
    },
 {
        'id': '2',
        'question': 'What is the capital of Germany?',
        'options': ['Paris', 'Berlin', 'London', 'Madrid'],
        'answer': 'Berlin'
    },
{
        'id': '3',
        'question': 'What is the capital of England?',
        'options': ['Paris', 'Berlin', 'London', 'Madrid'],
        'answer': 'London'
    },
  {
        'id': '4',
        'question': 'What is the capital of Spain?',
        'options': ['Paris', 'Berlin', 'London', 'Madrid'],
        'answer': 'Madrid'
    }]
}

const PORT = 3000
app.get('/generals', (req, res) => {
    
    res.send(quizzes);
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
