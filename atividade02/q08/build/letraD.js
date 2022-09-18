var Payment2 = /** @class */ (function () {
    function Payment2(name, time, language) {
        this.name = name;
        this.time = time;
        this.language = language;
    }
    Payment2.prototype.output = function () {
        console.log("\n     ".concat(this.name, "\n     My payment time is ").concat(this.time, "\n     and\n     my preffered language is ").concat(this.language));
    };
    return Payment2;
}());
var payment2 = new Payment2("Ely", 120.56, "TypeScript");
payment2.output();
