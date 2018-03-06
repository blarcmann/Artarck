function solution(S) {
    var S = "Forget CVs..Save time . x x";

}

function FindSpacing(sentence) {
    sentence = "dddd dddd ddd ddd";
    return sentence.indexOf(" ") === -1;
}
var findSpace = function (sentence) {
    sentence = "Dont tell me shiiitt"
    return sentence.indexOf('dddd') === -1;
};

findSpace("this is football");





function solution(S) {
    var S = 'This is a string',
        index = 0,
        res = [];
    while ((index = S.indexOf(' ', index + 1)) > 0) {
     console.log(res.push(index));   
    }
}





var str = 'This is a string',
    index = 0,
    res = [];
while ((index = str.indexOf(' ', index + 1)) > 0) {
    res.push(index);
}

function solution (S) {
   var S = "this is football";
   var count = 0;
   var pos = S.indexOf(" ")

    for(i = 0; i = S.indexOf(" "); i++) {
        
    }
}

function solution (xter, spaces) {
    var xter = "this is string with stape";
    var spaces = 0;

    for( var i = 0, searchIndex = 0; i<xter.length; ++i) {
        searchIndex = xter.indexOf(" ");

        if(searchIndex == -1) {
            break;

            ++spaces;
        }
    }
    xter = xter.substring(searchIndex + 1);
    return xter;
}
console.log(spaces);





function cmp(a, b) { return a - b; }

function solution(A, B) {
    var n = A.length, m = B.length, i = 0;
    A.sort(cmp);
    B.sort(cmp);
    for (var k = 0; k < n; k++) {
        if (i < m - 1 && B[i] < A[k])
            i += 1;
        if (A[k] == B[i])
            return A[k];
    }
    return -1;
}

