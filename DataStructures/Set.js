/**
 * A Set is a collection of elements but no duplicates
 * Since es6 has a set implementation, call the class MySet
 */

class MySet {
  constructor() {
    this.collection = [];
  }

  // check if element exists in the collection
  has(element) {
    return this.collection.indexOf(element) > -1;
  }

	// has = (element) => this.collection.indexOf(element) !== -1;
  // returns collection
  values() {
    return this.collection;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.collection.length;
  }

  // this will return the union of 2 sets
  union(otherSet) {
    const unionSet = new MySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach(elm => {
      unionSet.add(elm);
    });

    secondSet.forEach(elm => {
      unionSet.add(elm);
    });

    return unionSet;
    // another approach
    // return new Set([...firstSet, ...secondSet])
  }

  // this method will return the intersection of two sets as a new set
  // intersection meaning the value exists in both sets
  intersection(otherSet) {
    const intersectionSet = new MySet();
    const firstSet = this.values();

    firstSet.forEach(elm => {
      if (otherSet.has(elm)) {
        intersectionSet.add(elm);
      }
    });

    return intersectionSet;
  }

  // this method returns the difference between two sets
  difference(otherSet) {
    const differenceSet = new MySet();
    const firstSet = this.values();

    firstSet.forEach(elm => {
      if (!otherSet.has(elm)) {
        differenceSet.add(elm);
      }
    });
    return differenceSet;
	}
	
	// this method will test if the set is a subset of a different set
	// test if the first set completely exist in the other set
	subset = (otherSet) => {
    const firstSet = this.values();
    return firstSet.every((values) => {
      return otherSet.has(values);
    });
  };
}

// test cases
const setA = new MySet();
const setB = new MySet();
setA.add("a");
setA.add("b");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log('set A', setA.values());
console.log('set B', setB.values());
console.log('setA is subset', setA.subset(setB));
console.log('setA intersection', setA.intersection(setB).values());

const setC = new MySet();
const setD = new MySet();
setA.add("a");
setB.add("a");
setB.add("c");
setB.add("a");
setB.add("d");
console.log('setD values', setD.values());
setD.remove("a");
console.log('should return false', setD.has("a"));
console.log(setD.add("d"));
console.log('setD size', setD.size())
