
## 💻 Projeto

Aplicativo para lhe ajudar a conectar-se e organiza o momento de diversão e jogar com os amigos. Crie grupos para jogar seus games favoritos com seus amigos com esse App que possui autenticação com Discord.




## :hammer_and_wrench: Features 

-   [X] Autenticação Social OAuth2 com servidor do Discord.
-   [X] Obtém perfil do usuário cadastro no Discord (username e avatar);
-   [X] Lista os servidores do Discord que o usuário faz parte;
-   [X] Permite realizar o agendamento de partidas;
-   [X] Permite filtrar as partidas por categoria;
-   [X] Exibe se a partida foi agendada em um servidor próprio (anfitrião) ou em servidores de outros (convidado);
-   [X] Compartilha o convite para ingressar no servidor do usuário;
-   [X] Permite redirecionar o usuário para o seu próprio servidor;
-   [X] Disponibiliza a função de Logout.


## 🧪 Tecnologias

<p align='left'>
  <a href="https://reactnative.dev">
    <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  </a>&nbsp;&nbsp;
  <a href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  </a>&nbsp;&nbsp;
</p>


## 🚀 Como executar

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

```cl
expo start
```

Lembre-se de criar o seu App no servidor do Discord para obter as credencias de autenticação. Em seguida, defina no arquivo .env as configurações do seu App (remova o example do arquivo .env.example).
 
 ```cl
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```


<br />
