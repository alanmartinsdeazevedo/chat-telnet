# Servidor de Chat via Telnet

Este é um servidor de chat simples desenvolvido para ser executado no Node.js, permitindo que os usuários se conectem via Telnet e conversem em uma sala de chat. É uma aplicação de exemplo para demonstrar a funcionalidade básica de um servidor de chat.

## Pré-requisitos

Antes de executar esta aplicação, certifique-se de que você tenha o Node.js instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).

## Como Usar

Siga estas etapas para executar o servidor de chat:

1. Clone este repositório para a sua máquina local:

   ```bash
   git clone https://github.com/alanmartinsdeazevedo/chat-telnet.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd seu-repositorio
   ```

3. Execute a aplicação no terminal usando o Node.js:

   ```bash
   node index.js
   ```

4. O servidor de chat agora está em execução e escutando na porta padrão 23. Você pode se conectar a ele usando um cliente Telnet.

## Conectar-se via Telnet

Você pode usar o cliente Telnet embutido em muitos sistemas operacionais para se conectar ao servidor de chat. Aqui está um exemplo de como se conectar via Telnet:

```bash
telnet localhost 4001
```

Você será conectado ao servidor de chat e poderá começar a enviar mensagens para a sala de chat.

## Comandos

- `/exit`: Fecha a conexão com o servidor.

## Contribuição

Sinta-se à vontade para contribuir com melhorias para este projeto. Abra uma issue ou envie um pull request com suas sugestões.

## Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Divirta-se!
