const x = 5 + 3;
/*
  const - klíčové slovo
  x - identifikátor
  = - operátor
  5 - číslo
  + - operátor
  3 - číslo
  ; - středník
  rozparsování prvků na tzv. tokeny
*/

/*
• JS engine - přeloží JS kód do nul a jedniček
• JS je vysoký jazyk (en výrazy) - je srozumitelný
• JS enginů je více - V8 (nejrychlejší - Google)
                    - SpiderMonkey

JS engine
  1.Kód píšeme do souboru.js       4.Interpreter
  2.Parsuje se                     5.Profiler
  3.Abstract Syntax Tree (AST)     6.Compiler -> převede na jedničky a nuly

Co je parsování?
• rozparsování prvků na tzv. tokeny
• proces převodu zdrojovéko kódu JS do AST

Co je AST?
• Abstract Syntax Tree 
• stromová reprezentace struktury zdrojového kódu JavaScriptu, kterou
  používají nástroje pro analýzu a transformaci kódu

Co je Interpreter?
• je program, který přímo vykoná JS kód řádek po řádku, často na základě AST, aniž
  by ho předem překládal do strojového kódu

Co je Compiler?
• vezme celý kód a přeloží ho do jiného cílového jazyka např. do strojového kódu
*/