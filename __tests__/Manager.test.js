const Manager = require("../lib/Manager");

test("create manager object", () => {
  const manager = new Manager("Bryan", 5, "bwilk483@gmail.com", 369);
  expect(manager.name).toBe("Bryan");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toBe(369);
  expect(manager.getRole()).toBe("Manager");
});
