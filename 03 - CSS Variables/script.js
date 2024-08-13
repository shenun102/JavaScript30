const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  // selects the data attribute of sliders or colorbox
  // dataset is an object that will contain all data attributes from said object
  const suffix = this.dataset.sizing || "";
  // selecting css variables
  // select rootnode of of document and change the property value
  // setProperty(property, value)
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  console.log(`--${this.name}`, this.value + suffix);
  // console.log(suffix);
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
