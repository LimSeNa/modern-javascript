// var, function과 같은 예약어를 프로퍼티 키로 사용, 권장하지는 않음복
var foo = {
  var: '',
  function: ''
};

console.log(foo); // {var: "", function: ""}