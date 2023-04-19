console.log('Iniciando Servidor Chat Telnet');

const { isUtf8 } = require('buffer');
let       net     = require('net'),
          carrier = require('carrier'); //Mod
          conexoes = [];                //Conexões
          porta = '4001';               //Porta TCP
          ip = require('ip');           //Mod para obter endereço ip local

// Criando servidor

let server = net.createServer(function(conn) {
  conexoes.push(conn);

    conn.on('close', 
        function(){
        let pos = conexoes.indexOf(conn);
          if(pos >= 0){
            conexoes.splice(pos, 1);
          }
        });
        

    conn.write("Servidor rodando no IP "+ ip.address() + " Porta " + porta)
    conn.write(' Nickname: ');
    let nick;
    carrier.carry(conn, function(msg){
        // se nick é falso, solicita que insira um nome para a conexão (Nick)
        if(!nick){
          nick = msg;
          console.log(nick + ": entrou no chat");
          conn.write(nick + " seja bem-vindo ao chat" + "\n");
          return;
        }

        // Verificar se o usuário deseja sair
        if(msg == '/exit'){
          conn.end();
          return;
        }
        
      // Mensagem de feedback.
      let feedback = nick + " : "+ msg +"\n";
      //Distribuição das mensagens.
      conexoes.forEach(function(one_connection){
      one_connection.write(feedback);
      });
    });
});
server.listen(porta);
console.log("Servidor em execução.");