![Cover](./.github/cover.png)

# Barber NextJS

Essa aplicação foi desenvolvida durante o evento Full Stack Week do dicasparadev.
É uma aplicação FullStack construída com Next serve para o usuário fazer agendamento nas barbearias disponíveis.

## Executando

Após clonar o repositório, acesse a pasta do projeto e execute os comandos abaixo:

Ter o docker instalado na máquina.

Criar conta no <a href="https://console.cloud.google.com/">Google Cloud Console</a> e registar uma nova aplicação.

Preencher o .env do projeto com as variáveis conforme o exemplo

```sh
npm install

docker compose up

npx prisma migrate dev
prisma db seed

npm run dev

```

Acesse <http://localhost:3000> para visualizar a aplicação.

## Screenshots

<p>
  <img src=".github/image2.png">
  <img src=".github/image3.png">
  <img src=".github/image4.png">
</p>
