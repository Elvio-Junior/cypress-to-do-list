# Objetivo
 
Este projeto tem o objetivo de demonstrar conceitos e formas de utilizar o framework Cypress para a criação de testes e2e e de API

# Pré-requisitos

## Sistemas Operacionais

- macOS 10.9 e superiores (Intel ou Apple Silicon 64-bit (x64 ou arm64))
- Linux 
    - Ubuntu 12.04 e superiores
    - Fedora 21
    - Debian 8 (x86_64 ou Arm 64-bit (x64 or arm64))
- Windows 7 e superiores (somente 64-bit)

    Para Linux Ubuntu/Debian executar a instalação

    apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

    Para CentOS executar a instalação

    yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib

## NodeJs
    - Node.js 14.x
    - Node.js 16.x
    - Node.js 18.x e superiores
    - Gerenciador de Pacotes do NodeJS (npm)

# Cypress

Framework de testes automatizados usando JavaScript

## Organização

O Cypress possui a seguinte organização de pastas:
    - e2e: arquivos de testes a serem realizados no formato <nome>.cy.js
    - fixtures: arquivos com dados estáticos a serem utilizados nos testes
    - downloads: arquivos baixados durante a execução dos testes
    - screenshots: capturas de telas realizadas durante a execução dos testes. Obs.: somente se tiver o comando cy.screenshot() no teste
    - videos: videos dos testes realizados
    - support: arquivos para comportamento reutilizavel nos testes 

# Projeto

# Instalação

Para instalar os recursos necessários digite na raiz do projeto o comando `npm install`

## Execução dos Testes

Existe algumas maneiras de executar os testes, sendo:
- Interface Gráfica: `npm run cypress:open`
- Linha de Comando sem gravação de video dos testes: `npm run cypress:run`    
- Linha de Comando gravando video dos testes: `npm run cypress:run-video`
- Linha de Comando executando testes somente de backend: `npm run cypress:run-backend`
- Linha de Comando executando testes somente da pagina ToDo: `npm run cypress:run-toDoPage`

# Referências
- https://nodejs.org/pt-br/
- https://www.cypress.io/

# Ferramentas para o Desenvolvimento

    As seguintes ferramentas são necessárias e/ou sugeridas para o projeto

## Instalação:
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/pt-br)

## IDE
- [VSCode](https://code.visualstudio.com/download)