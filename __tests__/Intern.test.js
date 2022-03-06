const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Rody');

    expect(intern.name).toBe('Rody');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('Rody@gmail.com');
    expect(intern.role).toBe('Intern');

    expect(intern.school).toBe('UC Berkeley');

    intern.getName();
    intern.getId();
    intern.getEmail();
    intern.getSchool();
    intern.getRole();
});