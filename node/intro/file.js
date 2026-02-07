import fs, { createReadStream } from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
const filename = "./docs/blog1.txt";

async function rename() {
  fs.promises.rename("./docs/blog2.txt", "./docs/blog_buffer.txt", (err) => {
    if (err) {
      console.error(err);
    }
  });
}

async function example_readfile_async() {
  try {
    const data = await fs.promises.readFile(filename, "utf-8");
    console.log(data);
    const content = "learn nodejs is easy";
    await fs.promises.writeFile(filename, content, { flag: "a+" });
    console.log("----write some content----");
    const newData = await fs.promises.readFile(filename, "utf-8");
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
}

async function example_appendFile_async() {
  try {
    const content = "\nsome content";
    await fs.promises.appendFile(filename, content);
  } catch (error) {
    console.log(error);
  }
}

const gatsbyUrl = "https://www.gutenberg.org/cache/epub/64317/pg64317.txt";
const outputFilePath = path.join(process.cwd(), "TheGreatGatsby.md");

// readfile will put text into memory before return data
async function stream_download(url, outputPath) {
  const response = await fetch(gatsbyUrl);
  if (!response.ok || !response.body) {
    response.body?.cancel();
    throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);
  }

  const fileStream = fs.createWriteStream(outputFilePath);
  console.log("start downloading");

  await pipeline(response.body, fileStream);
  console.log("file download successfully");
}

async function stream_readFile(filePath) {
  const readStream = createReadStream(filePath, { encoding: "utf-8" });
  try {
    for await (const chunk of readStream) {
      console.log("---file chunk start---");
      console.log(chunk);
      console.log("---file chunk end---");
    }
    console.log("over");
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}

try {
  await stream_download(gatsbyUrl, outputFilePath);
  await stream_readFile(outputFilePath);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
