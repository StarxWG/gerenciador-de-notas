// importação de dependência
import { error } from 'console';
import http from 'http';
import { url } from 'inspector';
import {v4} from 'uuid';

// setup do sevidor 
const porta = 3000;

// criando servidor
const servidor = http.createServer((req, res) =>{
    
    // funções back-end
    const {method, url} = req;
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    // buscar pelo id
    req.on("end", () => {
        const id = url.split('/')[2]

        // GET
    if (method === 'GET' && url === '/grades'){
        res.writeHead(200, {'Content-Type': "application/json"});
        res.end(JSON.stringify(grades));
    }

    // POST
    else if (method === 'POST' && url === '/grades'){
        const {studantName, course, grade} = JSON.parse(body);
        const newGrade = {id:v4(), studantName, course, grade};
        grades.push(newGrade);
        res.writeHead(201, {"Content-Type": 'application/json'});
        res.end(JSON.stringify(newGrade));
    }

    // PUT
    else if(url.startsWith('/grades/') & method === 'PUT'){
        const {studantName, subject, grade} = JSON.parse(body);
        const gradesToUpdate = grades.find((g) => g.id === id);
    
        if (gradesToUpdate){
            gradesToUpdate.studantName = studantName;
            gradesToUpdate.subject = subject;
            gradesToUpdate.grade = grade;
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(gradesToUpdate));
        } else{
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'Não encontrado'}));
        }
    }

    // DELETE
    else if (url.startsWith('/grades/') & method === "DELETE"){
        const index = grades.findIndex((g) => g.id === id)
        if (index !== -1){
            grades.splice(index, 1);
            res.writeHead(204)
            res.end()
        } else {
            res.writeHead(404, {'Content-Type': 'application/json'})
            req.end(JSON.stringify({message: 'grade not found'}))
        }
    }

    // Erro
    else {
        res.writeHead(404, {"Content-Type": 'application/json'});
        res.end(JSON.stringify({error: 'Rota não encontrada'}));
    }
    });

});

// criando array
const grades = [];

// iniciar o servidor
servidor.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`);
});
