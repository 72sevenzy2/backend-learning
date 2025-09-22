import fs from "fs/promises";

// const readFile = async () => {
//     try {
//         const data = await fs.readFile("./file.txt", "utf8");
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFile();

const writeFile = async () => {
    try {
        await fs.writeFile("./file.txt", "im writing to thos file");
        console.log("file has been changed")
    } catch (error) {
        console.log(error);
    }
}

const appendText = async () => {
    try {
        await fs.appendFile("./file.txt", '\nThis is appended text');
        console.log("text has been appended");
    } catch (error) {
        console.log(error);
    }
}

writeFile();
appendText();