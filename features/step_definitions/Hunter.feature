# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo procurar comida
    E pode dar comida para outros viajantes
    Para que possam seguir suas viajens saudáveis


    Contexto:
        Dado um Hunter de nome "Icaro"
        Ele sempre começa a viagem com 2 refeições
        E sempre começa a viagem saudável


    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições deve ser igual a 5

    Cenaŕio: Comeu e continuou saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeições deve ser igual a 0
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 1 vezes
        E a quantidade de refeições for menor que 2
        Então a quantidade de refeições deve ser igual a 0
        E o Hunter ficará doente

    Cenário: Deu comida para o traveler
        Quando o traveler pedir comida para o Hunter
        E a quantidade de refeições for menor que o pedido do traveler
        Então o Hunter dará comida para o traveler
        E não ficará doente
    
    Cenário: Não deu comida para o traveler
        Quando o traveler pedir comida para o Hunter
        E a quantidade de refeições não for menor que o pedido do traveler
        Então o Hunter não dará comida para o traveler
