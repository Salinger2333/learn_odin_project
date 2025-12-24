const orderTotal = require("./order-total.js");

test("works", () => {
  expect(1).toBe(1);
});
test("quantity check", () => {
  expect(
    orderTotal({
      items: [{ name: "Dragon candy", price: 2, quantity: 3 }],
    })
  ).toBe(6);
});
test("quantity specified", () => {
  expect(
    orderTotal({
      items: [{ name: "Dragon candy", price: 3 }],
    })
  ).toBe(3);
});

test("Happy path (Example 1)", () => {
  expect(
    orderTotal({
      items: [
        { name: "Dragon food", price: 8, quantity: 1 },
        { name: "Dragon cage (small)", price: 800, quantity: 1 },
      ],
    })
  ).toBe(808);
});

test("Happy path (Example 2)", () => {
  expect(
    orderTotal({
      items: [
        { name: "Dragon collar", price: 20, quantity: 1 },
        { name: "Dragon chew toy", price: 40, quantity: 1 },
      ],
    })
  ).toBe(60);
});

test("object assignment", () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// string
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

//Arrays and iterables
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

// Exceptions
// use wrapping function
function compileCode() {
  throw new Error("compile fail");
}
test("compile as expected", () => {
  expect(() =>  compileCode()).toThrow()
  expect(() =>  compileCode()).toThrow(Error)
  expect(() =>  compileCode()).toThrow(/fail/)
});
