const hello = (name) => {
  try {
    return `my is ${name}`;
  } catch (error) {
    return error;
  }
};

console.log(hello("bhasker"));
