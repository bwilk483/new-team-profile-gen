const Engineer = require("../lib/Engineer");

test("create the engineer object", () => {
  const engineer = new Engineer("Bryan", 1, "bwilk483@gmail.com", "bwilk584");
  expect(engineer.name).toBe("Bryan");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.getRole()).toBe("Engineer");
  expect(engineer.getGithub()).toBe(`https://github.com/bwilk584`);
});
