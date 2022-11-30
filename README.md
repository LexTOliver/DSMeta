# DSMeta

Aplicação para visualização de meta de vendas. Desenvolvido com <a href="https://spring.io/guides">Spring</a> no lado server e <a href="https://pt-br.reactjs.org/docs/getting-started.html">ReactJS</a> no lado cliente.

O server constrói uma API RESTful com um padrão de arquitetura em camadas e também disponibiliza um serviço de notificação via SMS utilizando a API do Twilio (em free trial, já expirou). As camadas estão divididas em services, repositories, entities e controllers. Além disso, utiliza o H2 como database local (arquivo import.sql). Importante ressaltar que a versão do JDK é a 11.

O cliente contrói uma interface web simples com responsividade. A página acessa os dados do servidor e lista todos os vendendores e possui o botão para notificar o vendedor em relação à venda (não funcional pois a licença do Twilio expirou).

Feito com base nas aulas do canal <a href="https://www.youtube.com/@DevSuperior">DevSuperior</a>


## Instalação e Teste

Clone do repositório no seu PC e execute os comandos no console:

### Backend

```bash
#Na pasta do backend
mvn spring-boot:run
```

### Frontend

```bash
#Na pasta do frontend
yarn dev
```

**Obs.:** tenha o Yarn instalado na sua máquina!

## Info

### Ferramentas e Tecnologias

 - Backend

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" width="60" height="60"/>

 - Frontend


<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="60" height="60"/>
