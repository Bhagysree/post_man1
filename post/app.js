import express from "express";

const app = express()
app.use(express.json());
const PORT = 5000



app.get("/", (req, res) => {
    try {
        res.status(200).send('hello server!');
    } catch (error) {
        console.error(error);
    }
 });

 app.get("/global", (req, res) => {
    res.send('hello global server!');
 });

app.post("/register", (req, res) => {
    let user = req.body;
    console.log(user);
    res.send('User registered successfully!');
});

app.post("/student/:rollno", (req, res) => {
    let id = req.params.rollno;
    console.log(`Student ID: ${id}`);
    res.json(id)
});

app.put("/update", (req, res) => {
   let updateData = req.body;
    console.log(updateData);
});

app.delete("/delete", (req, res) => {
    let deleteData = req.body;
    console.log(deleteData);
    res.send('Data deleted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});