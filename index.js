"use strict";
const { Firestore } = require("@google-cloud/firestore");
const fStore = new Firestore();

module.exports = {
  createCollection: function(request, response, fireStore) {
    try {
      let collectionRef = fireStore.collection("col");
      collectionRef.add({ foo: "bar" }); // No name provided, so uses auto-generated ID
      collectionRef.doc("SomeName").set({
        someKey: "someValue",
        someKey2: "someValue2",
        someKey3: "someValue3"
      });
      var docRef = fireStore.doc("col2/doc1");
      docRef.set(
        {
          foo2: "2bar",
          intervals: {
            nestedValue1: 1,
            nestedValue2: 2,
            nestedValue3: 3,
            nestedValue4: 4
          },
          name: "Some test Name"
        },
        { merge: true } // merge does not delete record vars that not included in set params
      );
      return response.status(200).send("Hello World!");
    } catch (error) {
      return response.status(500).send("Error!");
    }
  },
  createDB: function(request, response) {
    return module.exports.createCollection(request, response, fStore);
  },
  createDB2: function(request, response) {
    try {
      var collectionRef = fStore.collection("col");
      collectionRef.add({ foo: "bar" }); // No name provided, so uses auto-generated ID
      collectionRef.doc("SomeName").set({
        someKey: "someValue",
        someKey2: "someValue2",
        someKey3: "someValue3"
      });

      var docRef = fStore.doc("col2/doc1");
      docRef.set(
        {
          foo2: "2bar",
          intervals: {
            nestedValue1: 1,
            nestedValue2: 2,
            nestedValue3: 3,
            nestedValue4: 4
          },
          name: "Another test name"
        },
        { merge: true } // merge does not delete record vars that not included in set params
      );
      return response.status(200).send("Hello World!");
    } catch (error) {
      return response.status(500).send("Error!");
    }
  }
};
