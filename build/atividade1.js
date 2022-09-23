"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const Menu_1 = require("./Menu");
const showMenu_1 = require("./showMenu");
const vet = [];
let infinit = 1;
let choice;
while (infinit == 1) {
    choice = (0, showMenu_1.handleShowMenu)();
    switch (choice) {
        case Menu_1.Menu.store:
            const value = prompt('Escreva a palavra que você quer adcionar ao vetor: ');
            vet.push(value);
            console.clear();
            console.log(`A palavra ${value} foi adcionada com suceso!`);
            break;
        case Menu_1.Menu.remove:
            let countRemove = 0;
            vet.forEach(item => {
                console.log(`${countRemove}° item --> ${item} `);
                countRemove++;
            });
            console.log('Qual a posição da palavra que você deseja remover? ');
            const removeWord = Number(prompt('-->'));
            vet.splice(removeWord, 1);
            console.clear();
            console.log('A palavra foi removida com sucesso!');
            break;
        case Menu_1.Menu.update:
            console.clear();
            let count = 0;
            vet.forEach(item => {
                console.log(`${count}° item --> ${item} `);
                count++;
            });
            let position = Number(prompt('Qual palavra você quer atualizar?'));
            console.log();
            vet[position] = prompt('Escreva a nova palavra:');
            console.log('A palavra foi atualizada com sucesso');
            break;
        case Menu_1.Menu.show:
            console.clear();
            vet.forEach(item => {
                console.log(`${item} `);
            });
            break;
        case Menu_1.Menu.exit:
            infinit++;
            break;
        default:
            break;
    }
}
