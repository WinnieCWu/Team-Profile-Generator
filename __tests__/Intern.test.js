const Intern = require('../lib/Intern.js');

test('gets a school name', () => {
    const intern = new Intern("Rody", 7, "rody@gmail.com", "UC Berkeley");

    expect(intern.getSchool()).toBe("UC Berkeley");
});