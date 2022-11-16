import { InputError } from "./excessoes";

export function ehValido(opcao: string) {
    if(opcao != '1' && opcao != '2' && opcao != '3' && opcao != '4' 
    && opcao != '5' && opcao != '6' && opcao != '7' && opcao != '0') {
        throw new InputError('Opção inválida!');
    }
}