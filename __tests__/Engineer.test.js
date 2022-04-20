const Engineer = require("../lib/Engineer");

describe("Testing for Engineer Class", () => {
  it("creates an engineer object", () => {
    const test = new Engineer(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "davepaul"
    );
    expect(test.name).toEqual(expect.any(String));
    expect(test.id).toEqual(expect.any(Number));
    expect(test.email).toEqual(expect.any(String));
    expect(test.role).toEqual("Engineer");
  });

  it("gets name of employee", () => {
    const test = new Engineer(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "davepaul"
    );
    expect(test.getName()).toEqual("Dave");
  });

  it("gets id of employee", () => {
    const test = new Engineer(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "davepaul"
    );
    expect(test.getId()).toEqual(1);
  });
  it("gets email of employee", () => {
    const test = new Engineer(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "davepaul"
    );
    expect(test.getEmail()).toEqual("davepaulsanders@gmail.com");
  });
  it("gets github of employee", () => {
    const test = new Engineer(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "davepaul"
    );
    expect(test.getGithub()).toEqual("davepaul");
  });
  it("gets role of employee", () => {
    const test = new Engineer(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "davepaul"
    );
    expect(test.getRole()).toEqual("Engineer");
  });
});
