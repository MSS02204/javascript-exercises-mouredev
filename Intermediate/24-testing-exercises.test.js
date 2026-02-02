const isEven = require('./23-testing-exercises');

test("Si el número es par, debe devolver true", () => {
    expect(isEven(4)).toBe(true)
})

test("Si el número es impar, debe devolver false", () => {
    expect(isEven(9)).toBe(false)
})

test("Si el número es par, debe devolver true", () => {
    expect(isEven(12)).toBe(true)
})
