/*
Modulární programování
• je přístup, při kterém je aplikace rozdělena do menších, nezávislých 
  částí (modulů) – každý modul má na starosti jednu konkrétní funkcionalitu 
  a lze ho snadno znovu použít nebo otestovat

Je potřeba...
<script src="script.js" type="module"></script>
*/
import {score, lifes, firstFunction} from "./startgame.js";

console.log(score);
console.log(lifes);
firstFunction();

console.log('------------------------');

import setGame from "./startgame.js";

console.log(setGame.score1);
console.log(setGame.lifes1);
setGame.firstFunction1();