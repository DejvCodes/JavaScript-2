/*
Interpreter VS Compiler
• Interpreter - řádek po řádku, rychlejší -> pomalejší (pak je pomalejší)
• Compiler - celý kód najednou, pomalejší -> rychlejší 
*/

const sum = (num1, num2) => num1 + num2;

for (let i = 0; i < 1000; i++) {
    sum(5, 10); 
}

/*
Just in time compiler (JIT)
• součástí JS enginu
• JS je Interpretovaný (exituje JIT)
• je typ kompilátoru, který během běhu programu překládá JS kód (nebo jeho část) 
  z AST nebo bytecode do strojového kódu, aby urychlil jeho vykonávání 
  oproti čisté interpretaci
*/