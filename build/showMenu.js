"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleShowMenu = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const Menu_1 = require("./Menu");
function handleShowMenu() {
    let option = 0;
    let choice;
    do {
        console.log('Escolha sua opção:');
        console.log('1 - Armazenar dados da Array');
        console.log('2 - Remover dados da Array');
        console.log('3 - Atualizar dados da Array');
        console.log('4 - Apresentar todos os dados da Array.');
        console.log('5 - Sair');
        option = Number(prompt('--> '));
        switch (option) {
            case 1:
                choice = Menu_1.Menu.store;
                break;
            case 2:
                choice = Menu_1.Menu.remove;
                break;
            case 3:
                choice = Menu_1.Menu.update;
                break;
            case 4:
                choice = Menu_1.Menu.show;
                break;
            case 5:
                choice = Menu_1.Menu.exit;
                break;
            default:
                console.log('Opção inválida');
                break;
        }
    } while (option < 0 || option > 5);
    return choice;
}
exports.handleShowMenu = handleShowMenu;
