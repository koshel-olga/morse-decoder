const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decodeSymbol(expr) {
    morseStr ='';
    arrExpr = expr.match(/.{1,2}/g)
    for ( let exprStr of arrExpr) {
        if ( parseInt(exprStr) == 10 ) { morseStr += '.'; }
        else if ( parseInt(exprStr) == 11 ) { morseStr += '-'; }
    }

    if (morseStr == '') {return ' ' }
    else { return MORSE_TABLE[morseStr] }
}

function decode(expr) {
    resultStr = '';
    arrExpr = expr.match(/.{1,10}/g)
    for ( let exprStr of arrExpr) {
        resultStr += decodeSymbol(exprStr)
    }
    return resultStr
}

module.exports = {
    decode
}