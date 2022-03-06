const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Rody');

    expect(engineer.name).toBe('Rody');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('Rody@gmail.com');
    expect(engineer.role).toBe('Engineer');

    expect(engineer.github).toBe('RodyT');

    engineer.getName();
    engineer.getId();
    engineer.getEmail();
    engineer.getGithub();
    engineer.getRole();
});