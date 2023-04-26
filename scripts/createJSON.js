const fs = require("fs");
const path = require("path");

for (let i = 1; i <= 29; i++) {
  const filePath = path.join(__dirname, "JSON", "" + i);
  let json = {};
  json.name = "LocusGoupNFT #" + i;
  json.description = "NFT collections from LocusGoupNFT";
  json.image =
    "ipfs://bafybeih6lgecqu3xffubv54h7zx7rq4yd7cvdvhehsv73rhado3xk7z5eu/" +
    i +
    ".png";

  fs.writeFileSync(filePath, JSON.stringify(json));
}
