import { multiply } from "../../utils/index.js";

test('TEST 0', () => {
    const result = multiply(1, 0)
    expect(result).toBe(0);
});


describe("TEST 1", () =>{
    it("multiply 1 * 0 to equal 0", () => {
        const result = multiply(1, 0)
        expect(result).toBe(0);
    }),
    it("multiply 1 * 1 to equal 1", () =>{
        const result = multiply(1, 1)
        expect(result).toBe(1);
    })
});

describe("TEST 2", () =>{
    it("multiply 1 * 0 to equal 0", () => {
        const result = multiply(1, 0)
        expect(result).toBe(0);
    }),
    it("multiply 1 * 1 to equal 1", () =>{
        const result = multiply(1, 1)
        expect(result).toBe(1);
    })
});

describe("TEST 3", () =>{
    it("multiply 1 * 0 to equal 0", () => {
        const result = multiply(1, 0)
        expect(result).toBe(0);
    }),
    xit("multiply 1 * 1 to equal 1", () =>{
        const result = multiply(1, 1)
        expect(result).toBe(1);
    })
});

xdescribe("TEST 4", () =>{
    it("multiply 1 * 0 to equal 0", () => {
        const result = multiply(1, 0)
        expect(result).toBe(0);
    }),
    xit("multiply 1 * 1 to equal 1", () =>{
        const result = multiply(1, 1)
        expect(result).toBe(1);
    })
});