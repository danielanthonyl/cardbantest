# Teste para React Native Developer

> Esse teste tem como objetivo avaliar seu conhecimento em desenvolvimento mobile cross-plataform<br>
> Nossa prioridade são desenvolvedores com conhecimento em React Native, mas também iremos avaliar os testes realizados utilizando outros frameworks de desenvolvimento cross-plataform

## Requisitos
- React Native (https://facebook.github.io/react-native/)
- React (https://facebook.github.io/react/)
- Native Components
- JSX
- API Rest

### Desejáveis
- Testes unitários

## Como participar?
> Crie um repositório público com a resolução do teste e nos envie o link para clonarmos e avaliarmos seu projeto, assim como as instruções de configuração.

## Detalhes da prova
> O Teste consiste em criar um aplicativo de lista de tarefas(To do list).<br>
> O aplicativo deve ser desenvolvido utilizando preferencialmente o framework React Native, porém outros frameworks também serão avaliados. <br>

### Funcionalidades
> Deve conter no app as seguintes funcionalidades:
- [ ] Navegação com dados do usuário e itens de menu
- [ ] Listagem de tarefas
- [ ] Criação de nova tarefa
- [ ] Edição e exclusão de tarefa
- [ ] Exibir alerta de confirmaçao de exclusão

*Importante! A autenticação(página de login) não é obrigatória, porém será considerado um diferencial* <br>
*Importante!² Não é obrigatório seguir fielmente as cores e icones do protótipo, mas é importante tentar seguir a mesma estrutura*

### Especificações técnicas
> O app deve se comunicar com uma lista de dados externa via REST API, para isso o candidato deverá utilizar a API NodeJs que se encontra na pasta api/server.js. <br>
> As tarefas devem seguir a estrutura JSON abaixo

```
{
  id: Int,
  title: String,
  description: String,
  date: DateTime,
  completed: Boolean,
  created_at: Date
}
```

### Protótipo do app

[![List](http://i.imgur.com/Eb88PkA.jpg)](http://i.imgur.com/0zihnYm.png)
[![Create](http://i.imgur.com/KacMBSo.jpg)](http://i.imgur.com/6Fb53k7.png)
[![Edit](http://i.imgur.com/Wf478tT.jpg)](http://i.imgur.com/gL8OMVF.png)


### Muito Obrigado e boa sorte! ;)