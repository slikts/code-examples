export default class Baz {
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
