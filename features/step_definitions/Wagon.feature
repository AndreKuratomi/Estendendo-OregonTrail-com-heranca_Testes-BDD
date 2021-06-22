# language: pt

Funcionalidade: Carroça
    Como cocheiro
    Devo controlar a capacidade de passageiros na carroça
    E cuidar do estado de saúde dos passageiros
    Para que eu possa continuar a viagem.

    Contexto:
        Dada a capacidade da carroça igual a 5
        E a carroça sempre iniciando vazia
        E o passageiro de nome <name> que está com saúde <isHealthy> e tem <food> refeições
            | name   | isHealthy | food |
            | Sergio | true      | 3    |
            | Simone | true      | 5    |
            | Samuel | true      | 2    |
            | Sandra | true      | 4    |
            | João   | true      | 1    |
            | Diego  | false     | 2    |
            | Diana  | false     | 3    |

    Cenário: Revelar assentos disponíveis na carroça.
        Dada a entrada do passageiro "Sergio"
        E a entrada do passageiro "Simone"
        E a entrada do passageiro "Samuel"
        Quando me for perguntado a quantidade de assentos disponíveis
        Então devo responder que a quantidade de assentos disponíveis é 2
        
    Cenário: Um viajante consegue subir a bordo
        Dada a entrada do passageiro "Sergio"
        E a entrada do passageiro "Simone"
        E a entrada do passageiro "Samuel"
        Quando o passageiro "Sandra" tentar subir a bordo
        Então ele deverá ser adicionada à lista de passageiros

    Cenário: Um viajante não consegue subir a bordo
        Dada a entrada do passageiro "Sergio"
        E a entrada do passageiro "Simone"
        E a entrada do passageiro "Samuel"
        E a entrada do passageiro "Diego"
        E a entrada do passageiro "Diana"
        Quando o passageiro "Sandra" tentar subir a bordo
        Então ele não deverá ser adicionada à lista de passageiros

    Cenário: A carroça tem pessoas doentes e deverá fazer quarentena
        Dada a entrada do passageiro "Sergio"
        E a entrada do passageiro "Diana"
        Quando me perguntarem se devemos fazer quarentena
        Então a resposta deverá ser Sim


    Cenário: A carroça não tem pessoas doentes e não deverá fazer quarentena
        Dada a entrada do passageiro "Sergio"
        E a entrada do passageiro "Sandra"
        Quando me perguntarem se devemos fazer quarentena
        Então a resposta deverá ser Não


    Cenário: Contagem do total de refeições
        Dada a entrada do passageiro "Sergio"
        E a entrada do passageiro "Simone"
        Quando me perguntarem o total de refeições a bordo
        Então responderei que temos 8 refeições
