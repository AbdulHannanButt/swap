import { networkType } from "../../networkType.js";

let add = "";
if (networkType === "testnet") {
  add = "0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735"; // test net
} else if (networkType === "mainnet") {
  add = "0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735"; // main net
}

export default add;