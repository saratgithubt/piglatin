export default class PLTRules {

    private inputArray: string[];
    private outputArray: string[];
    private rules: { regex: string, cond: string }[]; //extend this object for complex rules

    constructor(input: string, output: string, rules: { regex: string, cond: string }[]) {
        this.inputArray = input.split('');
        this.outputArray = output.toLowerCase().split('');
        this.rules = rules;
    }

    public execute(): string {
        //Clean up Special Chars
        this.rules.forEach((a) => { 
            this.outputArray = this.outputArray.filter((outputChar) => {
                return (!(outputChar.match(a.regex) && a.regex !== '[A-Z]'))
            })    
        });
        //Apply Rule based on regex and cond
        this.rules.forEach((a) => {      
            this.inputArray.forEach((ev, ki) => {   
                if (ev.match(a.regex)) {                   
                    if (a.cond === 'F2B') {
                        this.outputArray[ki] = this.outputArray[ki].toUpperCase();
                    }
                    if (a.cond === 'B2F') {
                        const instPoint = (this.inputArray.length - ki) - (ev.length - 1);
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