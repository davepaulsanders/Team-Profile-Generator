const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Testing for Employee Parent Class", () => {
  it("creates an employee object", () => {
    const test = new Employee("Dave", 1, "davepaulsanders@gmail.com");
    expect(test.name).toEqual(expect.any(String));
    expect(test.id).toEqual(expect.any(Number));
    expect(test.email).toEqual(expect.any(String));
    expect(test.role).toEqual("Employee");
  });

  it("gets name of employee", () => {
    const test = new Employee(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "manager"
    );
    expect(test.getName()).toEqual("Dave");
  });

  it("gets id of employee", () => {
    const test = new Employee(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "manager"
    );
    expect(test.getId()).toEqual(1);
  });
  it("gets email of employee", () => {
    const test = new Employee(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "manager"
    );
    expect(test.getEmail()).toEqual("davepaulsanders@gmail.com");
  });
  it("gets role of employee", () => {
    const test = new Employee(
      "Dave",
      1,
      "davepaulsanders@gmail.com",
      "Employee"
    );
    expect(test.getRole()).toEqual("Employee");
  });
});
