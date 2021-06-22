const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const Traveler = require("./../../models/Traveler")
const { carroca } = require("./../../app");

let passengers        = [];
let availableSeat     = 0;
let totalFood         = 0;
let shouldQuarantine  = null;
let triedToComeAboard = {};

/** GIVEN */
Given('a capacidade da carroça igual a {int}', function (int) {
    carroca.capacity = int;
});

Given('a carroça sempre iniciando vazia', function () {
    carroca.passengers = [];
});

Given('o passageiro de nome <name> que está com saúde <isHealthy> e tem <food> refeições', function (dataTable) {
    let data = dataTable.hashes();

    data.forEach(passenger => {
        let values          = Object.values(passenger)
        let newPassenger    = new Traveler(...values);
        passengers.push(newPassenger);
    })
});

Given('a entrada do passageiro {string}', function (string) {
    let comingAboard = passengers.find(passenger => passenger.name === string);
    carroca.join(comingAboard);
});

/** WHEN */
When('me for perguntado a quantidade de assentos disponíveis', function () {
    availableSeat = carroca.getAvailableSeatCount();
});

When('me perguntarem o total de refeições a bordo', function () {
    totalFood = carroca.totalFood();
});

When('me perguntarem se devemos fazer quarentena', function () {
    shouldQuarantine = carroca.shouldQuarantine();
});

When('o passageiro {string} tentar subir a bordo', function (string) {
    let comingAboard = passengers.find(passenger => passenger.name === string);
    triedToComeAboard = comingAboard;
    carroca.join(comingAboard);
});

/** THEN */

Then('responderei que temos {int} refeições', function (int) {
    assert.strictEqual(totalFood, int);
});

Then('a resposta deverá ser Não', function () {
    assert.strictEqual(shouldQuarantine, false);
});

Then('a resposta deverá ser Sim', function () {
    assert.strictEqual(shouldQuarantine, true);
});

Then('ele não deverá ser adicionada à lista de passageiros', function () {
    let filter = carroca.passengers.filter(passenger => passenger.name === triedToComeAboard.name);
    let isAboard = filter.length > 0;

    assert.strictEqual(isAboard, false);
});

Then('ele deverá ser adicionada à lista de passageiros', function () {
    let filter = carroca.passengers.filter(passenger => passenger.name === triedToComeAboard.name);
    let isAboard = filter.length > 0;

    assert.strictEqual(isAboard, true);
});

Then('devo responder que a quantidade de assentos disponíveis é {int}', function (int) {
    assert.strictEqual(availableSeat, int);
});



