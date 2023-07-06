const inputEl = document.getElementById('textarea-el')
const copyBtn = document.getElementById('copy-el')
const resultEl = document.getElementById('result-el')

resultEl.textContent = ' 🤸 '
inputEl.addEventListener('input', function() {
    if (inputEl.value) {
        addEmoji()
    } else {
        resultEl.textContent = ''
    }
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
    let words = input.trim()
    let result = ''

    if (words.length > 0) {
        let replacedValue = words.replace(/\s+/g, " ")
        let newValue = replacedValue.replace(/\s+/g, " 🤸 ")
        result = newValue
    } else {
        resultEl.textContent = words
    }
    
    resultEl.textContent = result
}




