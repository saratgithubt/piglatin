import { StringMutations } from '../StringMutations';

test('check if  StringMutator translate', async () => {
    const inputData = () => StringMutations.translate('There is towel in bathroom').then(
        (a: string) => a as string
    )  
    await expect(inputData()).resolves.toBe('Heretay isway oweltay inway athroombay');
});

test('check if  StringMutator translate', async () => {
    const inputData =  () =>  StringMutations.translate('There-is-towel in bathroom').then(
         (a: string) =>  a as string
    )
    expect(inputData()).resolves.toBe('Heretay-isway-oweltay inway athroombay');
});
