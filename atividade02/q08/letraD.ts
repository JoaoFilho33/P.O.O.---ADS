class Payment2 {
    name: string;
    time: number;
    language: string;
 
    constructor(name: string, time: number, language: string) {
     this.name = name
     this.time = time
     this.language = language
    }
 
    output(): void {
     console.log(`
     ${this.name}
     My payment time is ${this.time}
     and
     my preffered language is ${this.language}`)
    }
 }
 
 const payment2: Payment2 = new Payment2("Ely", 120.56, "TypeScript")
 
 payment2.output()