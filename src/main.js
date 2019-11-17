// исходный тип
var TextInputSimple = /** @class */ (function() {
  function TextInputSimple(name) {
    this.name = name;
  }
  return TextInputSimple;
})();
// целевой тип
var TextInputMultySelect = /** @class */ (function() {
  function TextInputMultySelect(name, multyData) {
    this.name = name;
    this.multyData = multyData;
  }
  return TextInputMultySelect;
})();
var Adapter = /** @class */ (function() {
  function Adapter(originType) {
    this.originType = originType;
  }
  Adapter.prototype.getTextInputMultySelect = function() {
    return { name: this.originType.name, multyData: [this.originType.name] };
  };
  return Adapter;
})();
var textInputSimple = new TextInputSimple("TextInputSimple");
var adapter = new Adapter(textInputSimple);
debugger;
console.log(adapter.getTextInputMultySelect());
