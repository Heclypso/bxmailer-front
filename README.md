O projeto foi desenvolvido com intuito de criar um sistema de envio de e-mails html similar ao https://putsmail.com e utiliza a metodologia BEM para a nomenclatura de classes, o frontend do projeto é responsável por receber as informações inseridas nos formulários e enviar uma requisição fetch api do tipo post para a api realizar o envio do email, se tudo der certo a api irá retornar uma mensagem de código 200 no console do navegador do frontend "Email enviado com sucesso" e o JQuery irá exibir um toast azul na tela com a mensagem de sucess, caso contrario o JQuery irá bloquear o envio das informações para a api e irá exibir um toast vermelho com a mensagem de error e uma sequência de labels.error em vermelho informando quais campos precisam ser corrigidos.

O projeto não é uma cópia direta do https://putsmail.com ele é apenas uma inspiração, muitas coisas foram modificadas.

O toast de erro informa apenas erros relacionados ao preenchimento dos formulários, se por algum motivo acontecer um erro na api a própria api irá retornar um erro no console do navegador do frontend com o código 500 "Erro ao enviar email" seguido da causa do erro. 

Esse comportamento pode ser observado se você clonar o repositório e tentar enviar um email localmente com o projeto rodando no localhost ou em uma baseurl diferente da especificada nas permissões do cors.

Tecnologias utilizadas:

JQuery - responsável pela validação dos formulários.

Aria attributes - responsável por garantir que os leitores de tela consigam ler corretamente o formulário e as mensagens de erro(acessibilidade).

Gulp - criação de tarefas e automação, entre as tarefas criados no gulp estão tarefas responsáveis por, comprimir o html as imagens e o javascript, compilar o less, e uma tarefa de watch responsável por observar as mudanças nos arquivos de html e javascript e executar as determinadas tarefas quando ocorrer uma modificação nos mesmos. A transpilação do babel é chamada por um .pipe na tarefa comprimeJavascript.

Less - pré-processador css

Nodemailer - envio de e-mails.

Babel - transpilação do javascript para garantir o funcionamento do código em navegadores obsoletos, browserslist configurado para > 0.25% dos navegadores globais.

Express - criação de rotas de navegação

Jest.js - teste local do javascript

Cors - middleware de comunicação entre o frontend e o backend, apenas requisições options e post vindas de https://bxmailer-front.vercel.app vão ser aceitas pela api. A requisição options é a requisição padrão do cors para verificar se a baseurl tem o acesso permitido para usar a api e a requisição post é a que envia as informações para o nodemailer enviar os e-mails.

Projeto:

Link direto do projeto: https://bxmailer-front.vercel.app
Link do github: https://github.com/Heclypso/bxmailer-front
