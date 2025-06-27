Discover TV & Movies App
Um aplicativo React Native (usando Expo) que permite ao usuário descobrir séries de TV e filmes utilizando dados da API do The Movie Database (TMDB). O app possui uma tela de splash personalizada, monitoramento de conexão com a internet e um menu lateral compacto para navegação.

Funcionalidades:
Descobrir Séries de TV: Navegue por séries populares com imagens e descrições.
Descobrir Filmes: Navegue por filmes populares com imagens e descrições.
Splash Screen Personalizada: Exibe uma imagem temática ao iniciar o app.
Monitoramento de Conexão: Mostra um aviso caso o dispositivo esteja offline.
Menu Lateral Compacto: Troque facilmente entre as páginas de séries e filmes com um menu discreto.

Instalação:
Instale as dependências:
npx expo install ou npm install(Utilizará as dependências presentes no package.json OU irá instalar as mais recentes. Confira a compatibilidade antes.)
Inicie o projeto:
npx expo start

Estrutura do Projeto:
App.tsx — Arquivo principal, gerencia navegação, splash e monitoramento de conexão.
index.tsx — Página de séries de TV.
index2.tsx — Página de filmes.
assets — Contém imagens de splash e ícones.

Requisitos:
Node.js
Expo CLI
Uma chave de API do TMDB (já incluída no código para fins de demonstração)

Personalização:
Splash Screen: Substitua splash.jpg pela sua imagem e atualize o app.json se necessário.
Cores do Tema: Ajuste as cores nos estilos do App.tsx para um visual diferente.

Licença:
Este projeto é para fins educacionais.
