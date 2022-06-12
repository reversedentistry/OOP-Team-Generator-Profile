const Intern = require("../lib/intern.js"); 

describe("Intern", () => {
    describe("getName", () => {
        it("should return the right name in its argument", () => {
            const internName = new Intern("Cirilla", "SWALLOW", "zireael@cintra.com", "Cintra Academy")
            const result = internName.getName();

            expect(result).toEqual("Cirilla");
        })
    }); 
    describe("getId", () => {
        it("should return the right ID in its argument", () => {
            const internName = new Intern("Cirilla", "SWALLOW", "zireael@cintra.com", "Cintra Academy")
            const result = internName.getId();

            expect(result).toEqual("SWALLOW");
        })
    });
    describe("getEmail", () => {
        it("should return the right email in its argument", () => {
            const internName = new Intern("Cirilla", "SWALLOW", "zireael@cintra.com", "Cintra Academy")
            const result = internName.getEmail();

            expect(result).toEqual("zireael@cintra.com");
        })
    }); 
    describe("getRole", () => {
        it("should return the right role as specified in class", () => {
            const internName = new Intern("Cirilla", "SWALLOW", "zireael@cintra.com", "Cintra Academy")
            const result = internName.getRole();

            expect(result).toEqual("Intern");
        })
    });
    describe("getSchool", () => {
        it("should return the right school in its argument", () => {
            const internName = new Intern("Cirilla", "SWALLOW", "zireael@cintra.com", "Cintra Academy")
            const result = internName.getSchool();

            expect(result).toEqual("Cintra Academy");
        })
    });
})