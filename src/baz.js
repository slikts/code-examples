export default class Baz {
  constructor(a) {
    switch(a) {
      case 1:
        return 2;
    }
  }

  uncaught() {
    fetch("123").then(console.log);
  }

  onChange = (value) => {
    if (value && value.value === this.props.value) return;
    if (value === null) {
      this.value = value;
    }
    if (this.props.confirm) {
      if (this.state.confirm) {
        this.onConfirmClose();
      }
    }
  }
}

export const foo = (a, b, c, d, e, f, g, h, i, j, k, l, m) => [a,b,c,d,e,f,g,h,i,j,k,l,m]

export const bar = (a) => {
  if (a = 1) {
    return 1
  }
  if (a === 2) {
    return 2
  }
  if (a === 3) {
    return 3
  }
  if (a === 4) {
    return 4
  }
  if (a === 1) { return }
  if (a === 1) { return }
  if (a === 1) { return }
  if (a === 1) { return }
  if (a === 1) { return }
  if (a === 1) { return }
  if (a === 1) { return }
}
