const hello = (name) => {
  try {
    let a = 12;
    return `my is ${name}` + a;
  } catch (error) {
    return error;
  }
};

console.log(hello("bhasker"));
