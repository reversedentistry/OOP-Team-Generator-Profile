const Manager = require("../lib/manager.js"); 

describe("Manager", () => {
    describe("getName", () => {
        it("should return the right name in its argument", () => {
            const managerName = new Manager("Yennefer", "SORC11", "yenna@vengerberg.com", 1186)
            const result = managerName.getName();

            expect(result).toEqual("Yennefer");
        })
    }); 
    describe("getId", () => {
        it("should return the correct ID in its argument", () => {
            const managerId = new Manager("Yennefer", "SORC11", "yenna@vengerberg.com", 1186)
            const result = managerId.getId();

            expect(result).toEqual("SORC11");
        })
    });
    describe("getEmail", () => {
        it("should return the correct email in its argument", () => {
            const managerEmail = new Manager("Yennefer", "SORC11", "yenna@vengerberg.com", 1186)
            const result = managerEmail.getEmail();

            expect(result).toEqual("yenna@vengerberg.com");
        })
    }); 
    describe("getRole", () => {
        it("should return the correct role as specified", () => {
            const managerRole = new Manager("Yennefer", "SORC11", "yenna@vengerberg.com", 1186)
            const result = managerRole.getRole();

            expect(result).toEqual("Manager");
        })
    });
    describe("getOffice", () => {
        it("should return the correct number in its argument", () => {
            const managerOffice = new Manager("Yennefer", "SORC11", "yenna@vengerberg.com", 1186)
            const result = managerOffice.getOffice();

            expect(result).toEqual(1186);
        })
    });
})