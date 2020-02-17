function sum(a, b) {
    return a + b;
  }


function pq(p, q) {
    var del1 = -0.5*p;
    var del2 = Math.sqrt(Math.pow(p/2,2)-q);
    var svar1 = del1 + del2;
    var svar2 = del1 - del2;
    return svar1 + ", " + svar2;
}
  module.exports = { sum ,pq };
  
  function pytagoras(a, b) {
    var banan1 = a * a;
    var banan2 = b * b;

    var banan3 = banan1 + banan2;
    var banan4 = Math.sqrt(banan3);
  }