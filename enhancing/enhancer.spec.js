const enhancer = require('./enhancer.js');
// test away!

const item = {
    name: "Enhanced Item",
    durability: 80,
    enhancement: 19
}

describe("Enhancer Testing", () => {
    it("repair()", () => {
        expect(enhancer.repair(item).durability).toEqual(100)
    })

    it("success()", () => {
        const newItem = enhancer.succeed(item)
        const ogEnhancement = item.enhancement

        if (item.enhancement === 20) {
            expect(newItem.enhancement).toEqual(ogEnhancement)
        } else {
            expect(newItem.enhancement).toBeLessThanOrEqual(ogEnhancement)
        }
    })

    it("fails()", (item) => {
        if (item.enhancement < 15) {
            expect(enhancer.fail(item).durability).toEqual(item.durability - 5)
        } else if (item.enhancement >= 15) {
            expect(enhancer.fail(item).durability).toEqual(item.durability - 10)
        } else (item.enhancement > 16) {
            expect(enhancer.fail(item).enhancement).toEqual(item.enhancement - 1)
        }
    })

})