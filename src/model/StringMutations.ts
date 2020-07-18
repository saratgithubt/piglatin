import PLTRules from './PLTRules';
export class StringMutations {

    //Sample Input : Hello singway McCLoud end can't stairway apple Beach this-thing
    public static translate(input: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            try {
                let inputArray = input.split(SPACE);
                inputArray = inputArray.map((mapItem) => {
                    return StringMutations.processHypenRule(mapItem);
                });
                return resolve(inputArray.join(SPACE));
            } catch (error) {
                reject(new Error('Internal Error : Failed to Translate'));
            }
        });
    }

    public static processHypenRule(input: string): string {
        let inputArray = input.split(HYPEN);
        inputArray = inputArray.map((mapItem) => {
            if (mapItem === EMPTY) return mapItem as string;
            return StringMutations.isWordStartsWithOval(mapItem) ? StringMutations.translateOvals(mapItem) : StringMutations.translateConsonents(mapItem);
        })
        return inputArray.join(HYPEN);
    }

    public static translateOvals(input: string): string {
        if (input.endsWith(WAY)) return input;
        return new PLTRules(input, input + WAY,
            [{ regex: ALLCAPS, cond: FRONT2BACK},      
             { regex: '\'|\\.|\,', cond: BACK2FRONT}    
            ]).execute();
    }


    public static translateConsonents(input: string): string {
        if (input.endsWith(WAY)) return input;
        const output = input.length > 1 ? input.substring(1, input.length) + input.charAt(0).toLowerCase() : input;
        return new PLTRules(input, output + AY,
            [{ regex: ALLCAPS, cond: FRONT2BACK },      
             { regex: '\'|\\.|\,', cond: BACK2FRONT}    
            ]).execute();
    }

    public static isWordStartsWithOval(input: string): boolean {
        return new RegExp(OVALS).test(input.charAt(0));
    }

}

const FRONT2BACK = 'F2B';
const BACK2FRONT = 'B2F';
const WAY = 'way';
const EMPTY = '';
const QUOTE = '\'';
const ALLCAPS = '[A-Z]';
const AY = 'ay';
const OVALS = 'a|e|i|o|u|A|E|I|O|U';
const SPACE = ' ';
const HYPEN = '-';