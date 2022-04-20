const Employee = require("../lib/Employee");

describe("Testing for Employee Parent Class", () => {
  it("creates an employee object", () => {
    const test = new Employee("Dave", 1);
    expect(test.name).toBe("Dave");
    expect(test.id).toEqual(expect.any(Number));
    expect(test.email).toEqual(expect.toContain(".com"));
  });

  it("gets name of employee", () => {
    const test = new Employee("Dave", 1, "davepaulsanders@gmail.com, manager");
    expect(test.getName()).toEqual("Dave");
  });

  it("gets id of employee", () => {
    const test = new Employee("Dave", 1, "davepaulsanders@gmail.com, manager");
    expect(test.getId()).toEqual(1);
  });
  it("gets email of employee", () => {
    const test = new Employee("Dave", 1, "davepaulsanders@gmail.com, manager");
    expect(test.getEmail()).toEqual("davepaulsanders@gmail.com");
  });
  it("gets tole of employee", () => {
    const test = new Employee("Dave", 1, "davepaulsanders@gmail.com, Manager");
    expect(test.getEmail()).toEqual("Manager");
  });
});
