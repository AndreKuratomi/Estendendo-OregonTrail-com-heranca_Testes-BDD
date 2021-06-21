const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { viajante } = require("./../../app");

/** GIVEN */

Given('um Traveler de nome {string}', function (string) {
    viajante.name = string;
});

Given('ele sempre começa a viagem com {int} refeição', function (int) {
    viajante.food = int;
});

Given('ele sempre começa a viagem saudável.', function () {
    viajante.isHealthy = true;
});

/** WHEN */

When('o Traveler sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        viajante.hunt();
    }
});

When('o Traveler parar para comer {int} vezes', function (int) {
    for (let contador=0; contador < int; contador++) {
        viajante.eat();
    }
});

/** THEN */

Then('a quantidade de refeições deve ser igual a {int}', function (int) {
    assert.strictEqual(viajante.food, int);
});

Then('o Traveler não ficará doente', function () {
    assert.strictEqual(viajante.isHealthy, true)
});

Then('o Traveler ficará doente', function () {
    assert.strictEqual(viajante.isHealthy, false)
});
