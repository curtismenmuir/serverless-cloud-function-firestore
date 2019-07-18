var index = require("../index");

const mockRequest = sessionData => {
  return {
    session: { data: sessionData }
  };
};

describe("createCollection tests", () => {
  it("should return 'hello world' as string with 200 when successful", () => {
    var statusCode = 0;

    const res = {
      send: function(value) {
        return value;
      },
      status: function(value) {
        statusCode = value;
        return this;
      }
    };

    const fireStore = {
      add: function() {
        return true;
      },
      doc: function() {
        return this;
      },
      set: function() {
        return true;
      },
      collection: function() {
        return this;
      }
    };

    var result = index.createCollection(mockRequest(), res, fireStore);

    expect(typeof statusCode).toBe("number");
    expect(statusCode).toEqual(200);
    expect(typeof result).toBe("string");
    expect(result).toEqual("Hello World!");
  });

  it("should return 'Error!' as a string with 500 when error", () => {
    var statusCode = 0;

    const res = {
      send: function(value) {
        return value;
      },
      status: function(value) {
        statusCode = value;
        return this;
      }
    };

    const fireStore = {
      add: function() {
        throw new Error();
      },
      doc: function() {
        throw new Error();
      },
      set: function() {
        throw new Error();
      },
      collection: function() {
        throw new Error();
      }
    };

    var result = index.createCollection(mockRequest(), res, fireStore);

    expect(typeof statusCode).toBe("number");
    expect(statusCode).toEqual(500);
    expect(typeof result).toBe("string");
    expect(result).toEqual("Error!");
  });
});
