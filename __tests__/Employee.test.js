const Employee = require("../lib/Employee.js");

describe("Employee Class", () => {
  test("gets user's name", () => {
    const employee = new Employee("Rody", 7, "rody@gmail.com");

    expect(employee.getName()).toBe("Rody");
  });

  test("gets user's id number", () => {
    const employee = new Employee("Rody", 7, "rody@gmail.com");

    expect(employee.getId()).toBeGreaterThanOrEqual(1);
    expect(employee.getId()).toBeLessThanOrEqual(10);
    expect(employee.getId()).toBe(7);
  });

  test("gets user's email address", () => {
    const employee = new Employee("Rody", 7, "rody@gmail.com");

    expect(employee.getEmail()).toBe("rody@gmail.com");
  });

  test("gets user's role", () => {
    const employee = new Employee("Rody", 7, "rody@gmail.com");

    expect(employee.getRole()).toBe("Employee");
  });
});
