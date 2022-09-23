import PromptSync from 'prompt-sync';
const prompt = PromptSync()
import { Menu } from './Menu';

export function handleShowMenu() {

    let option = 0
    let choice: Menu;


    do {

        console.log('Escolha sua opção:')
        console.log('1 - Armazenar dados da Array')

        console.log('2 - Remover dados da Array')

        console.log('3 - Atualizar dados da Array')

        console.log('4 - Apresentar todos os dados da Array.')

        console.log('5 - Sair')

        option = Number(prompt('--> '))

        switch (option) {
            case 1:
                choice = Menu.store
                break;


            case 2:
                choice = Menu.remove
                break;


            case 3:
                choice = Menu.update
                break;

            case 4:
                choice = Menu.show
                break;

            case 5:
                choice = Menu.exit
                break;

            default:
                console.log('Opção inválida');
                break;
        }

    } while (option < 0 || option > 5)


    return choice
}