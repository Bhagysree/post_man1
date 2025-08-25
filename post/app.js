// import express from "express";

// const app = express()
// app.use(express.json());
// const PORT = 5000



// app.get("/", (req, res) => {
//     try {
//         res.status(200).send('hello server!');
//     } catch (error) {
//         console.error(error);
//         res.status(500).json('Internal Server Error');
//     }
//  });

//  app.get("/global", (req, res) => {
//     res.send('hello global server!');
//  });

// app.post("/register", (req, res) => {
//     let user = req.body;
//     console.log(user);
//     res.send('User registered successfully!');
// });

// app.post("/student/:rollno", (req, res) => {
//     let id = req.params.rollno;
//     console.log(`Student ID: ${id}`);
//     res.json(id)
// });

// app.put("/update", (req, res) => {
//    let updateData = req.body;
//     console.log(updateData);
// });

// app.delete("/delete", (req, res) => {
//     let deleteData = req.body;
//     console.log(deleteData);
//     res.send('Data deleted successfully!');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



import express from "express";

const app = express();

app.use(express.json());
const PORT = 5001;

// writing our first get / api

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello from status code" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

// to create or accept new data from client
app.post("/register", (req, res) => {
  try {
    // to accept data from client
    // we use a method of req
    /// which is req.body;

    let userDataFromClient = req.body;
    console.log(userDataFromClient);
    res.status(201).json({ msg: "your account created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.put("/update", (req, res) => {
  try {
    let updatingData = req.body;
    console.log(updatingData);
    res.status(200).json({ msg: "your account is updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.delete("/delete", (req, res) => {
  try {
    let deletingData = req.body;
    console.log(deletingData);
    res.status(200).json({ msg: "Your account  has deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.get("/cars/:name", (req, res) => {
  try {
    let suhail = req.params.name;
    console.log(suhail);
    res.status(200).json({ msg: suhail });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});