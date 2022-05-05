// UNION Types

//aliases
type Combinable = number | string;
type Literal = "as-number" | "as-text";

function combine(n1: Combinable, n2: Combinable, resultType: Literal) {
  let result;

  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultType === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;

  // if(resultType === 'as-number'){
  //     return +result
  // } else {
  //     return result.toString()
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combinedNames = combine("max", "anne", "as-text");
console.log(combinedNames);
