import './../extensions'

test('checking date', () => {
    expect(new Date().beginMonthOf(11, 2022)).toBe(4)
})

test('checking date 1', () => {
    expect(new Date().beginMonthOf(10, 2022)).toBe(2)
})

test('checking date 2', () => {
    expect(new Date().beginMonthOf(9, 2022)).toBe(6)
})

test('checking date 3', () => {
    expect(new Date().beginMonthOf(0, 2023)).toBe(7)
})