class Sorter {
  constructor() {
    this.arraySorter = [];
    this.comparator = function (leftSide, rightSide) {
      return leftSide - rightSide;
    }
  }

  add(element) {
    this.arraySorter.push(element);
  }

  at(index) {
    return this.arraySorter[index];
  }

  get length() {
    return this.arraySorter.length;
  }

  toArray() {
    return this.arraySorter;
  }

  sort(indices) {
    let tempArray = [];

    for(var i = 0; i < indices.length; i++) {
      tempArray.push(this.arraySorter[indices[i]]);
    }

    tempArray.sort(this.comparator);
    Array.prototype.sort.call(indices);

    for (var j = 0; j < indices.length; j++) {
      this.arraySorter[indices[j]] = tempArray[j];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;