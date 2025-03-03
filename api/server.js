import express from 'express'
import path from 'path'

const app = express();
const PORT = 3001;

app.use(express.static(path.resolve("dist"))); 

app.get("/", (req, res) => {
    res.sendFile(path.resolve("dist", "index.html"));
});

app.get("/newtest", (req, res) => {
    res.sendFile(path.resolve("dist", "newtest.html"));
});;

app.get("/about", (req, res) => {
    res.sendFile(path.resolve("dist", "about.html"));
});

app.get("/feedback", (req, res) => {
    res.sendFile(path.resolve("dist", "feedback.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

export default (req, res) => {
    app(req, res); 
};