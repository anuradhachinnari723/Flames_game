function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}


function check() {
    var a = document.getElementById("Y_name").value;
    var b = document.getElementById("c_name").value;
    lena = a.length;
    lenb = b.length;
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == "" || b == "") {
        alert("Enter the full names");
    }
    if (!a.match("^[a-zA-Z]+$") || !b.match("^[a-zA-Z]+$") || (lena < 3 || lenb < 3)) {
        document.getElementById("error").innerHTML = "OOPS! Enter the names properly";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontSize = "xx-large";
    }
    else if (a == b) {
        document.getElementById("error").innerHTML = "We cant guess your relation! Try initials combined with names.";
        document.getElementById("error").style.color = "blue";
        document.getElementById("error").style.fontSize = "xx-large";
    }
    else if (a.match("^[a-zA-Z]+$") && b.match("^[a-zA-Z]+$")) {
        
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < b.length; j++) {
                if (a[i] == b[j]) {
                    a = replaceAt(a, i, '*');
                    b = replaceAt(b, j, '*');
                }
            }
        }
        var c = 0;
        for (i = 0; i < a.length; i++) {
            if (a[i] != '*') {
                c++;
            }
        }
        for (i = 0; i < b.length; i++) {
            if (b[i] != '*') {
                c++;
            }
        }
        document.getElementById("error").innerHTML = c;
        if (c == 0) {
            document.getElementById("error").innerHTML = "God decides :<";
            document.getElementById("error").style.fontSize = "xx-large";
            document.getElementById("error").style.color = "black";
        }
        else {
            var index = 0;
            var d = 0;
            var rel = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sisters'];
            while (rel.length != 1) {
                d = c % rel.length;
                index = d - 1;
                if (d!=0) {
                    left = rel.slice(0,index);
                    right = rel.slice(index + 1,);
                    rel = right.concat(left);
                }
                else {
                   rel.pop();
                }   
            }
            document.getElementById("error").innerHTML =rel+" "+"type of relationship";
            document.getElementById("error").style.color = "red";
            document.getElementById("error").style.fontSize = "xx-large";
            document.getElementById("error").style.visibility = 'visible';
        }


    }



}
