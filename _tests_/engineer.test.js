const Engineer = require("../lib/engineer.js"); 

describe("Engineer", () => {
    describe("getName", () => {
        it("should return the right name in its argument", () => {
            const engiName = new Engineer("Geralt", "WOLF1", "whiteone@kaermorhen.com", "Gwynbleidd")
            const result = engiName.getName();

            expect(result).toEqual("Geralt");
        })
    }); 
    describe("getId", () => {
        it("should return the right ID in its argument", () => {
            const engiName = new Engineer("Geralt", "WOLF1", "whiteone@kaermorhen.com", "Gwynbleidd")
            const result = engiName.getId();

            expect(result).toEqual("WOLF1");
        })
    });
    describe("getEmail", () => {
        it("should return the right email in its argument", () => {
            const engiName = new Engineer("Geralt", "WOLF1", "whiteone@kaermorhen.com", "Gwynbleidd")
            const result = engiName.getEmail();

            expect(result).toEqual("whiteone@kaermorhen.com");
        })
    }); 
    describe("getRole", () => {
        it("should return the right role as defined in function", () => {
            const engiName = new Engineer("Geralt", "WOLF1", "whiteone@kaermorhen.com", "Gwynbleidd")
            const result = engiName.getRole();

            expect(result).toEqual("Engineer");
        })
    });
    describe("getGithub", () => {
        it("should return the right GitHub name in its argument", () => {
            const engiName = new Engineer("Geralt", "WOLF1", "whiteone@kaermorhen.com", "Gwynbleidd")
            const result = engiName.getGithub();

            expect(result).toEqual("Gwynbleidd");
        })
    });
})