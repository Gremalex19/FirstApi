const express = require ("express");

const app = express();

app.use(express.json());

const users =[];

app.get('/hello', (request,response) =>{
response.send("Hola ");

});

app.post('/user',(req,response) => {
users.push(req.body);
response.send("Usuario agregado exitosamente ");

});

app.delete("/user/:id",(request,response) => {
const id = request.params.id;
const user = users.find((user) => user.id == id);
users.splice(users.indexOf(user),1);
response.send("Usuario eliminado");

})

app.get("/users", (request,response) => {
response.send(users);

});

app.put("/user/:id", (request,response) => {
const id = request.params.id;
const newPassword = request.body.password;

const user = users.find((user) => user.id == id);

user.pwd = newPassword;
users.push(user);
response.send("Usuario actualizado");


});


app.listen(3000,() => {

    console.log("Example app on port" + 3000);
});


