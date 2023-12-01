class Number {
  constructor(id, properties) {
    this.id = id;
    this.properties = props;
  }
  text() {
    return '{"id":"' + this.id.toString() + '","properties":"' + this.properties.toString() + '" },'
  }
}

const test = new Number(1, 1);

var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[2].firstName + " " + obj.employees[2].lastName + "\n" + test.text();
