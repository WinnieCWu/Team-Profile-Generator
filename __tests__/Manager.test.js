const Manager = require('../lib/Manager.js');

test("gets a manager's office number", () => {
    const manager = new Manager("Rody", 7, "rody@gmail.com", 3);

    expect(manager.getOfficeNumber()).toBe(3);
});