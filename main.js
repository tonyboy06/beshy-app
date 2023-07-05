const inputEl = document.getElementById('textarea-el')
const copyBtn = document.getElementById('copy-el')
const resultEl = document.getElementById('result-el')


inputEl.addEventListener('input', function() {
    addEmoji()
})

inputEl.addEventListener('click', function() {
    inputEl.value = ''
})

copyBtn.addEventListener('click', function() {
    copy()
})

function copy() {
    var outputText = document.getElementById("result-el");
    var range = document.createRange();
    range.selectNode(outputText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    
    
    copyBtn.classList.add('copied');
    setTimeout(function() {
    copyBtn.classList.remove('copied');
    }, 1000);
}

function addEmoji() {
    let input = inputEl.value
    let words = input.split(" ")
    let result = ' '

    for (let i = 0; i < words.length; i++) {
        result += words[i] + " 🤸 "
    }
    resultEl.textContent = result.trimEnd()
}




