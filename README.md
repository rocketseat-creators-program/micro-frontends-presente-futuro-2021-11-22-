<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

## Micro Frontends Presente e Futuro

Olá a todos, neste workshop vamos falar um pouco sobre o presente e o futuro dos micro frontends.
vamos aprender como montar micro frontends usando 'create-mf-app',
vamos criar duas aplicações simulando um ambiente onde temos uma DSL desing system library (DSL) e uma aplicação frontend,
que vai onsumir os serviços os componentes da DSL, com isso vamos explorar varias as técnicas de compartilhamento de código
e de self healing que é a habilidade de um micro frontend se auto reconfigurar quando ocorre algum problema.

## Primeiros passos 🏁

Clone o repositório.

```sh
git clone gitgit@github.com:rocketseat-experts-club/micro-frontends-presente-futuro-2021-11-22-.git container
```

`cd` no diretório.

```sh
cd  container
```

Instale as dependências do diretório principal do projeto:

|**⚠️ usaremos yarn para gerenciar nossos pacotes**

```sh
cd dls
```

Instale as dependencias

```sh
yarn install
```

em seguida, entre no diretório dos nossos MFE's

```sh
cd host
```

Instale as dependencias

```sh
yarn install
```

Inicie o servidor de desenvolvimento em cada aplicação:

```sh
yarn  start
```

Com isso, você terá os aplicativos em execução em:

- [localhost:8080](http://localhost:8080/) (aplicativo host)
- [localhost:8081](http://localhost:8081/) (DSL)


Abra uma dessas portas no navegador de sua escolha e você estará pronto para integrar com o aplicativo inicial 🚀.


## Ferramentas Utilizadas 🧰

- [x] React como uma linguagem de IU
- [x] Webpack5 como module bundler
- [x] Prettier como formatador de código
- [x] Styled components como um gerenciador de estilos
- [x] TailwindCss UI como nosso kit de ferramentas de design

## Expert

| [<img src="https://avatars.githubusercontent.com/u/7741167?s=460&u=41e738d1178fcf31656665fe34c1c490d9c271cb&v=4" width="75px;"/>](https://github.com/vitormalencar) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                          [Vitor Alencar](https://github.com/vitormalencar)                                                          |

## Licença

Projetado com ♥ por [vitormalencar](https://vitormalencar.com). Licenciado sob a [Licença MIT](licença).
