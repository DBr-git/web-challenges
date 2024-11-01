const data = 1;

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "number":
    console.log("number!");
    break;
  case "string":
    console.log("string!");
    break;
  case "bigint":
    console.log("bigInt!");
    break;
  case "function":
    console.log("function!");
    break;
  case "symbol":
    console.log("symbol!");
    break;
  case "object":
    if (data === null) {
      console.log("null!");
    } else if (Array.isArray(data)) {
      console.log("array!");
    } else console.log("object!");
    break;
  default:
    console.log("Couldn't find type of data!");
}
