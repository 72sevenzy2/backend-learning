import fs from "fs/promises";

const readFile = async () => {
    try {
        const data = await fs.readFile("./file.txt", "utf8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

readFile();