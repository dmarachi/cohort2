
class Lifo {

  constructor() {
    this.queue = [];
  }

  add(a) {
    if(a) {
      this.queue.push(a);
      return true;
    }
    return false;
  }

  removingLast() {
    if(this.queue.length > 0) {
      const nextOut = this.queue.pop();
      return nextOut;
    }
    else
      return "Empty";
  }
}

export default Lifo;