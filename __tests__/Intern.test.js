const Intern = require("../lib/Intern");

describe("Testing for Intern Class", () => {
  it("creates an engineer object", () => {
    const test = new Intern(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "Towson University"
    );
    expect(test.name).toEqual(expect.any(String));
    expect(test.id).toEqual(expect.any(Number));
    expect(test.email).toEqual(expect.any(String));
    expect(test.role).toEqual("Intern");
  });

  it("gets name of Intern", () => {
    const test = new Intern(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "Towson University"
    );
    expect(test.getName()).toEqual("Dave");
  });

  it("gets id of Intern", () => {
    const test = new Intern(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "Towson University"
    );
    expect(test.getId()).toEqual(1);
  });
  it("gets email of Intern", () => {
    const test = new Intern(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "Towson University"
    );
    expect(test.getEmail()).toEqual("davepaulsanders@gmail.com");
  });
  it("gets school of Intern", () => {
    const test = new Intern(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "Towson University"
    );
    expect(test.getSchool()).toEqual("Towson University");
  });
  it("gets role of Intern", () => {
    const test = new Intern(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "Towson University"
    );
    expect(test.getRole()).toEqual("Intern");
  });
});
