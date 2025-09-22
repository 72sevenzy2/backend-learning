import crypto from "crypto";

// const hash = crypto.createHash("sha256");
// hash.update("password123");
// console.log(hash.digest("hex"));
// // const res = hash.digest('hex');

// crypto.randomBytes(16, (error, buffer) => {
//     if (error) { throw new Error(error).message; }
//     console.log(buffer.toString('hex'));
// })

// cipher and decipher

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const vi = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, vi);
let encrypted = cipher.update('hello this is saim', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

let decipher = crypto.createDecipheriv(algorithm, key, vi);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final('utf8');
console.log(decrypted);