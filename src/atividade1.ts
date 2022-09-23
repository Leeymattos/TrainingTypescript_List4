import PromptSync from "prompt-sync";


const prompt = PromptSync()

import { Menu } from "./Menu";
import { handleShowMenu } from "./showMenu";

const vet: string[] = []

let infinit = 1

let choice: Menu


while (infinit == 1) {

    choice = handleShowMenu()
    switch (choice) {
        case Menu.store:

            const value = prompt('Escreva a palavra que você quer adcionar ao vetor: ')

            vet.push(value)

            console.clear()

            console.log(`A palavra ${value} foi adcionada com suceso!`)

            break;

        case Menu.remove:
            let countRemove = 0;


            vet.forEach(item => {
                console.log(`${countRemove}° item --> ${item} `)
                countRemove++
            })

            console.log('Qual a posição da palavra que você deseja remover? ');
            const removeWord = Number(prompt('-->'));

            vet.splice(removeWord, 1)

            console.clear()

            console.log('A palavra foi removida com sucesso!')

            break;

        case Menu.update:
            console.clear()
            let count = 0;
            vet.forEach(item => {
                console.log(`${count}° item --> ${item} `);
                count++;
            })

            let position = Number(prompt('Qual palavra você quer atualizar?'))

            console.log()
            vet[position] = prompt('Escreva a nova palavra:')

            console.log('A palavra foi atualizada com sucesso')

            break;

        case Menu.show:
            console.clear()
            vet.forEach(item => {
                console.log(`${item} `)
            })
            break;

        case Menu.exit:
            infinit++
            break;

        default:
            break;
    }

}



