const hello = (name) => {
  try {
    const a = 12;
    return `my is ${name}${a}`;
  } catch (error) {
    return error;
  }
};

const userSignup = async (payload) => {
  try {
    let dsf = "sdafsdfasdfa";
    console.log(dsf);
  } catch (error) {
    console.log(error);
  }
};

console.log(hello("bhasker"));
