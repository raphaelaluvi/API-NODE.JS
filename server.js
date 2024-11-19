import express from "express";

//lista[] e tem os objetos{}
const posts = [
    { id: 1, descricao: "Foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato brincando com bola", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Gato brincando com cachorro", imagem: "https://placecats.com/millie/300/150" },
];

const app = express();
//app vai usar o express q vai devolver json
app.use(express.json());

//app ouca a porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) =>{
    //status 200 -> ok
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) =>{
    const index = buscarPostPorID(req.params.id)
    //status 200 -> ok, agr devolve da lista de posts com esse index
    res.status(200).json(posts[index]);
});
