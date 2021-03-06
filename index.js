const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());
const PORT = 8080;

let User = {
    username: 'Abdullahi',
    password: 'Mohamed',
    email: 'tb2332wz@go.minnstate.edu',
    courses: {
        course1: {
            courseId: 'CMSC2204',
            courseName: 'Mobile Device Programming',
            startDate: '08/23/2021',
            endDate: '12/23/2021'
        },
        course2: {
            courseId: 'CMSC2203',
            courseName: 'C# Programming',
            startDate: '08/23/2021',
            endDate: '12/23/2021'},
        course3: {
            courseId: 'CMSC1255',
            courseName: 'Server-Side Programming',
            startDate: '08/23/2021',
            endDate: '12/23/2021'}
    }
}

app.post('/addUser', (req, res)=>{
    try{
        return res.status(200).json('Added user ' + req.body.username + ' successfully');
    }
    catch{
        return res.status(500);
    }
});

app.get('/getUser', (req, res)=>{
    try{
        return res.status(200).json(User);
    }
    catch{
        return res.status(500);
    }
});


app.listen(PORT, ()=>{
    console.log('Served started on port ' + PORT);
})
