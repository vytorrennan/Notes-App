# Horse Notes
Aplicação de notas
Projeto online em: https://horse-notes.vercel.app/

# Como executar o projeto:

## Backend
### Passo 1 
Com o terminal dentro da pasta do projeto, de cd para pasta backend

### Passo 2
Inicie o ambiente virtual
#### No Windows
No terminal na pasta backend execute: `python -m venv .venv`
#### No Linux
No terminal na pasta backend execute: `python3 -m venv .venv`

### Passo 3
Carregue o ambiente virtual
#### No Windows
No terminal na pasta backend execute: `.\.venv\Scripts\bin\activate`
#### No Linux
No terminal na pasta backend execute: `source ./.venv/bin/activate`

### Passo 4
Instale as dependencias
No terminal na pasta backend execute: `pip install -r requirements.txt`

### Passo 5 
Faça as migrations
#### No Windows
No terminal na pasta backend execute: `python manage.py makemigrations`
No terminal na pasta backend execute: `python manage.py migrate`
#### No Linux
No terminal na pasta backend execute: `python3 manage.py makemigrations`
No terminal na pasta backend execute: `python3 manage.py migrate`

### Passo 6 
Execute o servidor backend
#### No Windows
No terminal na pasta backend execute: `python manage.py runserver`
#### No Linux
No terminal na pasta backend execute: `python3 manage.py runserver`

## Mantenha o terminal do backend aberto rodando o servidor backend e abra um outro terminal para executar o servidor frontend de forma paralela

## Frontend
### Passo 1
Com o terminal dentro da pasta do projeto, de cd para pasta frontend

### Passo 2
Instale as dependencias
No terminal na pasta frontend execute: `npm install`

### Passo 3
Execute o server da aplicação \
No novo terminal na pasta frontend execute: `npm run dev`

### Passo 4
Agora acesse no navegador http://localhost:5173/
