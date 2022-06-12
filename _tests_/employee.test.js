const Employee = require("../lib/employee.js"); 

describe("Employee", () => {
    describe("getName", () => {
        it("should return the right name in its argument", () => {
            const employeeName = new Employee("Jaskier", "BARD69", "dandelion@delettenhove.com")
            const result = employeeName.getName();

            expect(result).toEqual("Jaskier");
        })
    }); 
    describe("getId", () => {
        it("should return the right ID in its argument", () => {
            const employeeName = new Employee("Jaskier", "BARD69", "dandelion@delettenhove.com")
            const result = employeeName.getId();

            expect(result).toEqual("BARD69");
        })
    });
    describe("getEmail", () => {
        it("should return the right email in its argument", () => {
            const employeeName = new Employee("Jaskier", "BARD69", "dandelion@delettenhove.com")
            const result = employeeName.getEmail();

            expect(result).toEqual("dandelion@delettenhove.com");
        })
    }); 
    describe("getRole", () => {
        it("should return the right role as specified in class", () => {
            const employeeName = new Employee("Jaskier", "BARD69", "dandelion@delettenhove.com")
            const result = employeeName.getRole();

            expect(result).toEqual("Employee");
        })
    });
})