
function myPrompt() {
    var x;     
    var temp; 
    var nSpaces = 0;
    var nVowels = 0;
    var nCons = 0;
    var nDigits = 0;
    var nSymbols = 0;

    //var sentence = prompt ("Please enter a sentence", " "); 
    var sentence = document.forms["demo-input"]["input-sentence"].value; 
    
    if (sentence != "") {
        for(var i=0;i<sentence.length;i++){
            temp = sentence.charAt(i).toLowerCase();
            if(temp == " "){
                nSpaces ++;
            }
            else if(temp >= 'a' && temp <= 'z'){
                if (temp == 'a' || temp == 'e' || temp == 'i' || temp == 'o' || temp == 'u'){
                    nVowels ++;
                }
                else {
                    nCons ++;
                }
            }
            else if (temp >= '0' && temp <= '9'){
                nDigits ++;
            }
            else {
                nSymbols ++;
            }
        }
        x = "The sentence you entered was: " + sentence;
        document.getElementById("input").innerHTML = x;
        document.getElementById("output").innerHTML = "<p>This sentence contains " + i + " characters, and is composed of: </p> <ul> <li>" + nSpaces + " spaces;</li>"
        + "<li>" + nVowels + " vowels; </li>"
        + "<li>" + nCons + " consonants; </li>"
        + "<li>" + nDigits + " digits; </li>"
        + "<li>" + nSymbols + " symbols;  </li></ul>";
    } 
    else{
        x = "No sentence was entered";
        document.getElementById("input").innerHTML = x;
        document.getElementById("output").innerHTML = "";
        }
    
}