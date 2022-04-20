const Manager = require("../lib/Manager");

describe("Testing for Manager Class", () => {
  it("creates a manager object", () => {
    const test = new Manager("Dave", 1, "davepaulsanders@gmail.com", 12);
    expect(test.name).toEqual(expect.any(String));
    expect(test.id).toEqual(expect.any(Number));
    expect(test.email).toEqual(expect.any(String));
    expect(test.role).toEqual("Manager");
  });

  it("gets name of employee", () => {
    const test = new Manager("Dave", 1, "davepaulsanders@gmail.com", 12);
    expect(test.getName()).toEqual("Dave");
  });

  it("gets id of employee", () => {
    const test = new Manager("Dave", 1, "davepaulsanders@gmail.com", 12);
    expect(test.getId()).toEqual(1);
  });
  it("gets email of employee", () => {
    const test = new Manager("Dave", 1, "davepaulsanders@gmail.com", 12);
    expect(test.getEmail()).toEqual("davepaulsanders@gmail.com");
  });
  it("gets office number of employee", () => {
    const test = new Manager("Dave", 1, "davepaulsanders@gmail.com", 12);
    expect(test.getOffice()).toEqual(12);
  });
  it("gets role of employee", () => {
    const test = new Manager("Dave", 1, "davepaulsanders@gmail.com", 12);
    expect(test.getRole()).toEqual("Manager");
  });
});
