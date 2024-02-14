class RandomizedSet {
  public map: object = {};
  public arr: number[] = [];
  public length = 0;
  constructor() {}

  insert(val: number): boolean {
    if (this.map.hasOwnProperty(val)) {
      return false;
    } else {
      this.arr.push(val);
      this.length++;

      this.map[val] = this.length - 1;
      return true;
    }
  }

  remove(val: number): boolean {
    if (!this.map.hasOwnProperty(val)) {
      return false;
    } else {
      const last_element = this.arr[this.length - 1];
      if (last_element !== val) {
        const val_index = this.map[val];
        const last_element_index = this.length - 1;
        //swap
        this.arr[val_index] = last_element;
        this.map[last_element] = val_index;

        this.arr[last_element_index] = val;
        this.map[val] = last_element_index;
      }
      this.arr.pop();
      this.length--;
      delete this.map[val];

      return true;
    }
  }

  getRandom(): number {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
