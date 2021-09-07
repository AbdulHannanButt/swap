import { networkType } from "../../networkType.js";

let add = "";
if (networkType === "testnet") {
  add = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // test net
} else if (networkType === "mainnet") {
  add = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // main net
}

export default add;