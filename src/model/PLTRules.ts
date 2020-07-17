export default class PLTRules {

    private inputArray: string[];
    private outputArray: string[];
    private rules: { regex: string, cond: string }[];

    constructor(input: string, output: string, rules: { regex: string, cond: string }[]) {
        this.inputArray = input.split('');
        this.outputArray = output.toLowerCase().split('');
        this.rules = rules;
    }

    public execute(): string {
        this.rules.forEach((a) => {     
            this.inputArray.forEach((ev, ki) => {   
                if (ev.match(a.regex)) {
                    this.outputArray = this.outputArray.filter((outputChar) => {
                        return (!(outputChar.match(a.regex) && a.regex !== '[A-Z]'))
                    })
                    if (a.cond === 'FB') {
                        this.outputArray[ki] = this.outputArray[ki].toUpperCase();
                    }
                    if (a.cond === 'BF') {
                        const instPoint = (this.inputArray.length - ki) - (a.regex.length - 1);
                        const outputLength = this.outputArray.length + 1;                     
                        const firstPart = this.outputArray.slice(0, (outputLength - instPoint));
                        firstPart.push(ev);
                        this.outputArray = firstPart.concat(this.outputArray.slice((outputLength - instPoint), outputLength));
                    }
                }
            });
        });

        return this.outputArray.join('') as string;
    }

    
}