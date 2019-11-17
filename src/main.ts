// исходный тип
class TextInputSimple {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// целевой тип
class TextInputMultySelect {
  name: string;
  multyData: Array<string>;
  constructor(name: string, multyData: Array<string>) {
    this.name = name;
    this.multyData = multyData;
  }
}

// целевой тип
interface ITextInputMultySelect {
  getTextInputMultySelect(): TextInputMultySelect;
}

class Adapter implements ITextInputMultySelect {
  private originType: TextInputSimple;

  getTextInputMultySelect(): TextInputMultySelect {
    return { name: this.originType.name, multyData: [this.originType.name] };
  }
  constructor(originType: TextInputSimple) {
    this.originType = originType;
  }
}

const textInputSimple = new TextInputSimple("TextInputSimple");
const adapter = new Adapter(textInputSimple);
debugger;
console.log(adapter.getTextInputMultySelect());
