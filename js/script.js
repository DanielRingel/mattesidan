console.log("hejsan");

function pq(p, q) {
    var del1 = -0.5*p;
    var del2 = Math.sqrt(Math.pow(p/2,2)-q);
    var svar1 = del1 + del2;
    var svar2 = del1 - del2;
    return svar1 + ", " + svar2;
}

function readValue(){
    var p_str = document.getElementById("p").value;
    var p = parseInt(p_str);
    var q_str = document.getElementById("q").value;
  var q = parseInt(q_str);

  var svar1 = pq(p,q);
  document.getElementById("svar").innerHTML=svar1;
}