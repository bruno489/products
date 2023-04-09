Para rodar localmente se deve:

1- No terminal, rode o comando 'yarn install' na pasta raiz para que baixe todas as dependencias.

2- Criar o arquivo '.env' na pasta raiz onde deverá conter:
    MONGO_URL='URLmongo' //string
    PORT=número da porta //int de 4 dígitos
    JWT_TOKEN='token' //string de 30 digitos aleatórios para servir de token

3- No terminal, rode o comando 'yarn dev'

-------------------------------------------------------------------------------------

As Tecnologias/Frameworks/Bibliotecas usadas foram:

1- além das solicitadas como o TypeScript, Express, Mongoose e NodeJS.

2- commitizen:
    Para padronização dos push para o git.

3- dotenv:
    Para centralizar as informações necessárias para o funcionamento do sistema.

4- jsonwebtoken:
    Para criar o JWT que terá o token de autenticação e as infos do usuário.