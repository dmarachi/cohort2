
class Fifo {

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

  removingFirst() {
    if(this.queue.length > 0) {
      const nextOut = this.queue.shift();
      return nextOut;
    }
    else
      return "Empty";
  }
}

export default Fifo;