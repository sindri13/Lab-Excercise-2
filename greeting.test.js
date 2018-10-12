const greeting = require('/HelloWorld');

test("returns greeting with custom name", () => {
	expect(greeting("Mei)).toBe("Hello, Mei!");
});
