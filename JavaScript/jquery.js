$(document).ready(function () {
    $('input[type="submit"]').click(function (e) {
        var source_text = document.forms["myForm"]["prose-input"].value;
        var clean_text;
        var split_text;
        cleanProse(source_text);
        createArray();
        purplifyProse();
    });
});

function cleanProse(text) { //cleans the text of punctuation marks
    /*make all text lowercase*/
    clean_text = text.toLowerCase();
    clean_text = clean_text.replace(/;/g, '');
    clean_text = clean_text.replace(/:/g, '');
    clean_text = clean_text.replace(/[?]/g, '');
    clean_text = clean_text.replace(/!/g, '');
    clean_text = clean_text.replace(/[.]/g, '');
    return clean_text;
}

function createArray() { //turns the string into an array of words
    split_text = clean_text.split(" ");
    return split_text;
}

function purplifyProse() { //iterates through non-purple prose
    var new_string;
    getSynonyms("love");
    /*for (var i = 0; i<split_text.length; i++) {
        new_string = new_string + getSynonyms(split_text[i]);
    }*/
}

function getSynonyms(word) {
    alert('here');
    /*alert ('get');
    var longest_syn = word;*/
    $.getJSON('http://www.corsproxy.com/words.bighugelabs.com/api/2/2771c1654859624d24c2ff1363eff44c/' + word + '/json', function (data) {
        alert('here2');
        parseHere(data);
    });
}

function parseHere(data) {
    alert('got it');
}