const hello = (name) => {
  try {
    const a = 12;
    return `my is ${name}${a}`;
  } catch (error) {
    return error;
  }
};

console.log(hello('bhasker'));
