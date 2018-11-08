export default class CountryClass {
  name: String;

  constructor(name: String) {
    this.name = name;
  }

  getName(): String {
    return this.name;
  }
}
