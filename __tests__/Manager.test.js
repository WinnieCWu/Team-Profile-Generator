const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Rody');

    expect(manager.name).toBe('Rody');
    expect(manager.id).toBe(expect.any(Number));
    expect(manager.email).toBe('Rody@gmail.com');
    expect(manager.role).toBe('Manager');

    expect(manager.officeNumber).toBe('1');

    manager.getName();
    manager.getId();
    manager.getEmail();
    manager.getOfficeNumber();
    manager.getRole();
});