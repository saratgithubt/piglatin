import PLTRules from './PLTRules';
export class StringMutations {
    
    //Hello singway McCLoud end can't stairway apple Beach this-thing

   
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
        if (input.endsWith("way") ) return input;
        return new PLTRules(input, input + 'way',
        [{ regex: '[A-Z]', cond: 'FB' },
        { regex: '\'', cond: 'BF' },
        { regex: '\\.', cond: 'BF' },
        { regex: '\,', cond: 'BF' }]).execute();
    }


    public static translateConsonents(input: string): string {
        if (input.endsWith("way") ) return input;
        const isStartCharCap = input.charAt(0).match('[A-Z]');  
        const output = input.length > 1 ? input.substring(1,input.length) + input.charAt(0).toLowerCase() : input;       
        return new PLTRules(input, output + 'ay',
            [{ regex: '[A-Z]', cond: 'FB' },
            { regex: '\'', cond: 'BF' },
            { regex: '\\.', cond: 'BF' },
            { regex: '\,', cond: 'BF' },
            { regex:'[A-Z]', cond: 'SC-'+isStartCharCap }]).execute();
    }

    public static isWordStartsWithOval(input: string): boolean {
        return new RegExp(OVALS).test(input.charAt(0));
    }

}

const WAY = 'way';
const EMPTY = '';
const QUOTE = '\'';
const ALLCAPS = new RegExp('[A-Z]');
const AY = 'ay';
const OVALS = 'a|e|i|o|u|A|E|I|O|U';
const SPACE = ' ';
const HYPEN = '-';