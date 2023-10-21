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


let text3= "            Mən Code Academydə Programing tədrisi alıram            ";
let letterCount = text3.replace(/[^a-zA-Z0-9]/g, '').length;

console.log("Cümlədəki hərf sayı:", letterCount);
//ve ya let letterCount = sentence.trim().replace(/\s+/g, ' ').split(' ').join('').length; string metodu ile

