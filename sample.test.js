// Một hàm cộng hai số đơn giản để test thử
const sum = (a, b) => a + b;

test('Kiểm tra hàm sum: 1 cộng 2 phải bằng 3', () => {
    expect(sum(1, 2)).toBe(3);
});