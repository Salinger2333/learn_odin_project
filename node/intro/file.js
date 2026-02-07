const fs = require("node:fs/promises");

const filename = "./docs/blog1.txt";

async function rename() {
  fs.rename("./docs/blog2.txt", "./docs/blog_buffer.txt", (err) => {
    if (err) {
      console.error(err);
    }
  });
}

async function example_readfile() {
  try {
    const data = await fs.readFile(filename, "utf-8");
    console.log(data);
    const content = "learn nodejs is easy";
    await fs.writeFile(filename, content);
    console.log("----write some content----");
    const newData = await fs.readFile(filename, "utf-8");
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
}
example_readfile();
