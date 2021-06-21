# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar passageiros doentes
    Para que possam seguir suas viajens saudáveis


    Contexto:
        Dado um Doctor de nome "Carlos"
        Ele sempre começa a viagem com 1 refeição
        E sempre começa a viagem saudável


    Cenário: Caçou para conseguir mais refeições
        Quando o Doctor sair para caçar 1 vezes
        Então a quantidade de refeições deve ser igual a 2

    Cenaŕio: Comeu e continuou saudável
        Então a quantidade de refeições deve ser igual a 0
        E o Doctor não ficará doente

    Cenário: Curou um traveler
        Quando o Doctor curar um traveler doente
        Então o traveler não ficará doente

    Cenário: Ficou sem comida e buscou com o Hunter
        Quando o Doctor ficar doente
        Então o Doctor pedirá comida para o Hunter
        E não ficará doente

        


// A Classe de Doctor deve ter ao menos 2 Cenários;

Um Médico é um Viajante especializado em medicina que tem como o objetivo curar viajantes doentes.

Método heal(traveler)
Um viajante será passado como parâmetro para o método .heal(), e a propriedade isHealthy deverá mudar para true.