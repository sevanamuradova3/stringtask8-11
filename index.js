//8. Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.
let text = "Mən Code Academy Tələbəsiyəm";
let lowercaseSentence = text.toLowerCase();

console.log(lowercaseSentence);
//9. Mətndə başlanğıc və son boşluqları təmizləyin:
 //"            Mən Code Academydə Programing tədrisi alıram            "

let text1= "            Mən Code Academydə Programing tədrisi alıram            ";
let yeniMetn = text1.trim();

console.log(yeniMetn);
//10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın
let text2 = "Mən Code Academy Tələbəsiyəm.";
let words = text2.split(" ");

console.log(words);
//11.  "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.


var cumle= "            Mən Code Academydə Programing tədrisi alıram            ";


var yeniCumle = "";

for (var i = 0; i < cumle.length; i++) {
    if (cumle[i] !== ' ') {
        yeniCumle += cumle[i];
    }
}

console.log(yeniCumle.length);
