$(document).ready(function () {
    $('input[type="submit"]').click(function (e) {
        var source_text = document.forms["myForm"]["prose-input"].value;
        var clean_text;
        var split_text;
        cleanProse(source_text);
        createArray();
        getSynonyms();
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
}

function getSynonyms() {
    var j = "love";
    var longest_syn = j;
    $.getJSON('http://www.corsproxy.com/words.bighugelabs.com/api/2/2771c1654859624d24c2ff1363eff44c/' + j + '/json', function (data) {
        for (var i = 0; i < data.noun.syn.length; i++) {
            if (JSON.stringify(data.noun.syn[i]).length > longest_syn.length) {
                longest_syn = JSON.stringify(data.noun.syn[i]);
            }
        }
        alert(longest_syn);
        alert('here');
    });
    alert("made it");
}


//return longest string categorized as synonym
      // alert(JSON.stringify(data.noun.syn[1]));
/*recapitalize first letter of every sentence
var jsontext = '{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}';
var contact = JSON.parse(jsontext);
var fullname = contact.surname + ", " + contact.firstname;
// The value of fullname is "Aaberg, Jesper"
/* for (var i = 0; i < data.syn.length; i++) {
            alert("here1");
            row = data.syn[i];
            alert(row);
            alert("here");
{"noun":
    {"syn":
    ["trial","trial run","tryout","mental test","mental testing","psychometric      test","examination","exam","run","attempt","communicating","communication","cover","covering","effort","endeavor","endeavour","experiment","experimentation","mental measurement","natural covering","try"]},
    "verb":{"syn":["prove","try","try out","examine","essay","screen","quiz","ascertain","be","check","determine","evaluate","find out","judge","learn","pass judgment","score","see","submit","take","undergo","watch"]}
    }*/
