// Relembre como usar herança/delegação para estender um objeto de classe criando uma nova variação da classe original. 
// Aqui está um exemplo:

// class Dog {
//    constructor(name, breed, isGoodBoy) {
//       this.name = name;
//       this.breed = breed;
//       this.isGoodBoy = isGoodBoy;
//    }

//    sit() {
//        // sitting code here
//    }
// }

// class GuardDog extends Dog {
//    constructor(name, breed, isGoodBoy, attackWord) {
//       super(name, breed, isGoodBoy)
//       this.attackWord = attackWord;
//    }

//    bark() {
//       // barking code here
//    }
// }



// Nesta Entrega, você irá estender seu código do Oregon Trail para usar herança para criar dois novos tipos de viajante: 



// Doctor (Médico) e Hunter (Caçador). Eles terão todas as outras características de qualquer outro Viajante, com essas diferenças:

// 1.Doctor
// Um Médico é um Viajante especializado em medicina que tem como o objetivo curar viajantes doentes.

// Método heal(traveler)
// Um viajante será passado como parâmetro para o método .heal(), e a propriedade isHealthy deverá mudar para true.

// 2. Hunter
// Um Caçador é um Viajante que se dá melhor encontrando comida, mas também precisa de mais comida. Ele começa com 2 comidas em 
// vez de apenas 1 como os outros viajantes. Ele também pode dar comida para outros viajantes:

// Método hunt()
// Aumente a comida do caçador em 5. (Um viajante convencional ganha apenas 2.)

// Método eat()
// Consome 2 unidades da comida do caçador. Se um caçador não tiver 2 comidas quando for instruído a comer, ele come o quanto 
// puder (0 ou 1 unidade), mas o caçador não fica mais saudável. (Um viajante normal come apenas 1 unidade de comida.)

// Método giveFood(traveler, numOfFoodUnits)
// Transfere numOfFoodUnits do caçador para outro viajante. Se o caçador tiver menos comida do que foi instruído a dar, então 
// nenhuma comida é transferida.


// TESTE
// Nesse repositório foi disponibilizado os testes desenvolvidos nos vídeos de BDD para Traveler, e também para Wagon, de uma 
// maneira muito mais complexa.

// Sendo assim, diferente da primeira atividade do Oregon Trail, nessa será necessário criar o BDD — Features e Steps — para cada 
// uma das novas classes estendidas de Traveler.

// Cada nova Classe deve ter um arquivo de Feature e de Step;
// A Classe de Hunter deve ter ao menos 5 Cenários;
// A Classe de Doctor deve ter ao menos 2 Cenários;
// Wagon e Traveler devem passar nos testes;
// Hunter e Doctor devem passar nos testes;
// Talvez seja necessário alterar seu antigo código do Oregon Trail para passar nos testes feitos para eles.

// OBS: Não é necessário se preocupar com o formato ao qual foi desenvolvido o teste de Wagon. Ele está ali apenas para consulta. 
// Se quiser se aprofundar mais no conteúdo, busque pelo material complementar no canvas