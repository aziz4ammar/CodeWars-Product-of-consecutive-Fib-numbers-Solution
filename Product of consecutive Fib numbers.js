function productFib(prod) {
    let prev = 0;
    let current = 1;
  
    while (prev * current < prod) {
      const next = prev + current;
      prev = current;
      current = next;
    }
  
    return [prev, current, prev * current === prod];
  }
  