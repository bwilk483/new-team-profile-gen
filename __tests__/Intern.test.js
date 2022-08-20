const Intern = require("../lib/Intern");

test("inturn test", () => {
  const intern = new Intern("Bryan", 1, "bwilk483@hmail.com.com", "KU");
  expect(intern.name).toBe("Bryan");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.getRole()).toBe("Intern");
  expect(intern.getSchool()).toBe("KU");
});
