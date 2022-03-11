const Engineer = require('../lib/Engineer.js');

test('gets a Github username', () => {
    const engineer = new Engineer("Rody", 7, "rody@gmail.com", "RodyT");

    expect(engineer.getGithub()).toBe("RodyT");
});