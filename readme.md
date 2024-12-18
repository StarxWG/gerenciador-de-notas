Claro! Aqui está o **README.md** sem o código:

---

# Gerenciador de Notas - API

Bem-vindo ao **Gerenciador de Notas**! Esta API foi criada para gerenciar informações sobre notas de estudantes, permitindo operações como **criação**, **atualização**, **consulta** e **remoção** de notas. É uma solução simples e eficiente para lidar com dados acadêmicos de forma prática.

## Funcionalidades da API

- **GET /grades**: Retorna todas as notas cadastradas.
- **POST /grades**: Adiciona uma nova nota ao sistema.
- **PUT /grades/{id}**: Atualiza as informações de uma nota específica.
- **DELETE /grades/{id}**: Remove uma nota do sistema.

## Estrutura da API

A API é composta por um servidor simples que recebe requisições HTTP e responde com dados em formato JSON. Abaixo estão os detalhes sobre cada funcionalidade:

### 1. **GET /grades**
- **Descrição**: Retorna todas as notas cadastradas.
- **Resposta**: Lista de notas no formato JSON.

### 2. **POST /grades**
- **Descrição**: Adiciona uma nova nota.
- **Corpo da requisição**: Informações do estudante, curso e a nota.
- **Resposta**: A nota adicionada com um ID gerado automaticamente.

### 3. **PUT /grades/{id}**
- **Descrição**: Atualiza uma nota existente.
- **Corpo da requisição**: Novos dados para o estudante, curso e a nota.
- **Resposta**: A nota atualizada.

### 4. **DELETE /grades/{id}**
- **Descrição**: Remove uma nota do sistema.
- **Resposta**: Código de status 204 (Sem conteúdo) se a nota for removida com sucesso. Se a nota não for encontrada, será retornado um erro 404.

## Tecnologias Utilizadas

- **Node.js**: Para criação do servidor e manipulação das requisições HTTP.
- **UUID**: Para gerar IDs únicos para as notas.
- **HTTP**: Para comunicação entre cliente e servidor.

## Como Rodar

1. **Clone ou baixe o repositório**:
   - Clone o repositório ou baixe os arquivos diretamente para o seu computador.

2. **Instale as dependências**:
   - Abra o terminal na pasta do projeto e execute o comando:
     ```
     npm install
     ```

3. **Execute o servidor**:
   - Após instalar as dependências, execute o servidor com o comando:
     ```
     node server.js
     ```

4. **Acesse a API**:
   - A API estará rodando na porta `3000`. Você pode fazer requisições HTTP para `http://localhost:3000/grades`.

## Como Contribuir

Contribuições são bem-vindas! Para contribuir com o projeto, siga os passos abaixo:

1. Faça um **fork** do projeto.
2. Crie uma nova **branch**:
   ```
   git checkout -b feature/minha-feature
   ```
3. Faça suas alterações e **commit**:
   ```
   git commit -m "Adiciona nova feature"
   ```
4. Envie um **push**:
   ```
   git push origin feature/minha-feature
   ```
5. Abra um **pull request** para revisão.

## Licença

Este projeto é de **código aberto** e pode ser utilizado, modificado e distribuído livremente, conforme necessário.

---

Agora você pode gerenciar as notas de estudantes de forma simples e eficiente com esta API! 📚