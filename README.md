# Rinha de Backend no Runtime Bun. :fire: :boom: :boom:

## Pagina ultimo test
[Geatling result Expreejs](https://blrocha.github.io/rinha-backend-express/.root/)

## Stack
1. **JavaScript** linguagem de progamao. `sobre` - [Javascript](https://pt.wikipedia.org/wiki/JavaScript).
1. **NodeJs:** :arrows_counterclockwise: Runtime JavaScript assíncrono orientado a eventos, o Node.js foi projetado para construir aplicativos de rede escaláveis. No exemplo "olá mundo" a seguir, muitos conexões podem ser tratadas simultaneamente. Em cada conexão, o retorno de chamada é disparado, mas se não houver trabalho a ser feito, o Node.js irá dormir. `Fonte`: [Nodejs](https://nodejs.org/en/about).
1. **ExpressJs:** O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.. `Fonte`: [ExpressJS](https://expressjs.com/pt-br/)
1. **PostgresSQL:** :elephant: É um poderoso sistema de banco de dados relacional de objeto de código aberto com mais de 35 anos de desenvolvimento ativo que lhe rendeu uma forte reputação de confiabilidade, robustez de recursos e desempenho. `Fonte`: [Psontgres.org](https://www.postgresql.org/)
1. **Connector e Pool:** node-postgres é uma coleção de módulos node.js para interface com seu banco de dados PostgreSQL. Possui suporte para retornos de chamada, promessas, assíncrono/espera, pool de conexões, instruções preparadas, cursores, resultados de streaming, ligações C/C++, análise de rich type e muito mais! Assim como o próprio PostgreSQL, há muitos recursos: esta documentação visa colocá-lo em funcionamento rapidamente e na direção certa. Ele também tenta fornecer guias para tópicos mais avançados e extremos, permitindo que você aproveite todo o poder do PostgreSQL a partir do node.js. `Fonte`: [node-postgres](https://node-postgres.com/).
1. **Redis:** Banco de dados não relacional de chave-valor em memória. `Fonte`: [redis-server](https://redis.io/).
1. **Conector Redis**: [redis js](https://github.com/redis/node-redis).
1. **Nginx:** É um servidor HTTP e proxy reverso, um servidor proxy de e-mail, e um servidor proxy TCP/UDP genérico, originalmente escrito por Igor Sysoev. `Fonte`: [nginx](https://nginx.org/en/)
1. **Docker:** :whale: Um contêiner é uma unidade padrão de software que empacota o código e todas as suas dependências para que o aplicativo seja executado de forma rápida e confiável de um ambiente de computação para outro. Uma imagem de contêiner Docker é um pacote de software leve, independente e executável que inclui tudo o que é necessário para executar um aplicativo: código, tempo de execução, ferramentas do sistema, bibliotecas e configurações do sistema. `Fonte`: [docker](https://www.docker.com/resources/what-container/)

----

## Requisitos:

1. Docker
1. Java >= 8  `para rodar o stress-test`

## Instroções.

1. clone o projeto em

```sh
git clone https://github.com/BLRocha/rinha-backend-express.git

cd rinha-backend-express

## Up project
docker compose up

## Down project
docker compose down

## remove images from build
docker rmi -f $(docker images | grep rinh | awk '{print $3}' )
## 

```

## Setup de cargar.

Repo da rinha 2023-q3: :books: [Rinha de Backend](https://github.com/zanfranceschi/rinha-de-backend-2023-q3).

- Obs: criar uma pasta na raiz do seu usuário com o nome de `projects`, depois clone o projeto da rinha.

1. Baixar o gatling [](https://gatling.io/open-source/)

1. Descompactar o gatling em `projects/rinha-de-backend-2023-q3/stress-test/gatling`
1. Local dos scripts para rodar linux e windows `projects/rinha-de-backend-2023-q3/stress-test/`
---

#### Obs: Desempenho comprometido da aplicação no Windows.
