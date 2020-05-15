const enhancer = require('./enhancer.js');
// test away!

const item = {
    name: "Amber",
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
            expect(newItem.enhancement).toEqual(ogEnhancement + 1)
        }
    })
})