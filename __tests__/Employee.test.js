const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Rody');

    expect(employee.name).toBe('Rody');
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe('Rody@gmail.com');
    expect(employee.role).toBe('Employee');
});
