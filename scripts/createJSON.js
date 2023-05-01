const fs = require("fs");
const path = require("path");

for (let i = 1; i <= 80; i++) {
  const filePath = path.join(__dirname, "JSON", "" + i);
  let json = {};
  json.name = "LocusGoupNFT #" + i;
  json.description = "NFT collections from LocusGoupNFT";
  json.image =
    "ipfs://bafybeiebmxpsnhqavtvrawfjanc7phul2htznd76nnc7tu6owvc6dgvvae/" +
    i +
    ".png";

  fs.writeFileSync(filePath, JSON.stringify(json));
}
