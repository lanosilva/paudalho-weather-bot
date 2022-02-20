# Paudalho Weather Bot

## Atualização 2.0.5

### O que mudou ?
* Criei o arquivo `dayweek.json`
* Criei o arquivo `months.json`
* Criei o arquivo `prewords.json`
* Criei o arquivo `time.json`
### O que há de novo ?
Nova `function` chamada `timeDay` ela determina uma menssagem positiva
e ultiliza dos aquivos `dayweek.json`, `months.json`, `prewords.json` e `time.json`
para criar textos legais e depois tweetar direto no canal das pessoas.


## Atualização 2.0.0

### O que mudou ?
* Modifiquei o arqivo `feelslike.json`
* Modifiquei o arquivo `outlook.json`
* Modifiquei o arquivo `bot.js`
### O que há de novo ?
1- No arquivo feelslike.json: foram adicionados mais dois sentimentos
         { "ultra cold":"🥶 frio da porra", }
         { "ultra hot": "🔥 e é o inferno é ? " }

2- No arquivo outlook.json: foi adicionado o `Mostly Cludy`
        "Mostly Cloudy":{
        "translate": "Nuvemzinha main",
        "emoji": "☁️"
                        }
                        
3- No arquivo bot.js foram modificadas algumas `functions` para estar de acordo com a região.
        function sensacao(temp, feelslike) {
                 if (temp < 16)
                    return feelslike["ultra cold"];
                 if (temp >= 16 && temp <= 20)
                    return feelslike["very cold"];
                 if (temp >= 16 && temp <= 20)
                    return feelslike["cold"];
                 if (temp > 20 && temp <= 25)
                    return feelslike["ok"];
                 if (temp > 25 && temp <= 30)
                    return feelslike["hot"];
                 if (temp > 31)
                    return feelslike["very hot"];
                 if (temp > 35)
                    return feelslike["ultra hot"];
}

## Apresentação

Olá prazer em conhecer você! sou Hylan Silva, um aspirante a programador
e desenvolvedor das própias tabaquices. "kkkkkk", sou de Recife-pe.

## Sobre o bot

Bom, pra falar a verdade esse bot é quase uma cópia de um código que eu vi 
no twitter, gostei muito do programa e resolvi fazer um parecido, claro que
com os meus toques e maluquises. Deu um trabalho desgramado pra fazer, mas
ta tão bonitinho e perfeitinho que eu fiquei muito feliz. :) 

PS: vou deixar o link para o github e as redes sociais do autor do código original

## O bot é muito dificil de fazer ? 

Na teoria ? Não! Mas na prática deu um trabalhinho sim, mas foi aquela diversão
de fim de semana, gostei muito de ter trabalhado nele, aaaaaaaaaa #felicidades

## Licença

Bem este bot utiliza a licença, FOQQCEC de 10 de Janeiro de 2022.

como o próprio nome da licença diz: 
* Faça
* O
* Que 
* Quiser
* Com 
* Esse
* Código

é uma licença de código livre e aberto, vai lá, pode copiar e se divertir.
Depois que tudo ficar pronto, posta no twitter e me marca "@laninhonutella"
para que eu possa divulgar e rir muito também. heehw :D 

### Links para o código original

Aqui estão os links para você avaliar os códigos originais (não que tenha mudado muito, mas enfim ! <3)

* Nome do Autor: Christian Davi
* Link do GitHub: https://github.com/cdbm
* Link do Twitter: https://twitter.com/_p1som
* Link do Repositório do Bot: https://t.co/gGZVRTGfo7


## Contatos 

Enfim estes são meus contatos caso você queira tirar alguma dúvida ou etc.

### Intagram
* @laninhonutella: https://www.instagram.com/laninhonutella

### Twitter
* @laninhonutella: https://twitter.com/laninhonutella

### GitHub
* Hylan-Silva: https://github.com/HylanSilva

### Email
* hylansilva27@gmail.com: https://hylansilva27@gmail.com

### Discord
* Pai de Banho#1557 