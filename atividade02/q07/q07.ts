class Payment {
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

const payment: Payment = new Payment("Ely", 120.56, "TypeScript")

payment.output()