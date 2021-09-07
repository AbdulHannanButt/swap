import { networkType } from "../../networkType.js";

let add = "";
if (networkType === "testnet") {
  add = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"; // test net
} else if (networkType === "mainnet") {
  add = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"; // main net
}

export default add;