const textInput = document.getElementById('words');
const buttonInput = document.getElementById('count-btn');
const wordsNumber = document.getElementById('words-number');
function countWords(){
    let words = textInput.value;
    let wordsTrimmed = words.replace(/\s+/g," ").trim();
    let splitWords = wordsTrimmed.split(" ");
    let numberOfWords = splitWords.length;
    if(splitWords[0] == "")
    {
        numberOfWords = 0;
    }
    wordsNumber.innerHTML = numberOfWords;
}
buttonInput.addEventListener('click', countWords);