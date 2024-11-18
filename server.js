import express from "express";

const app = express();
//app ouca a porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) =>{
    res.status(200).send("Hello World, alura!!");
});