import { networkType } from "../../networkType.js";
let add = "";
if (networkType === "testnet") {
  add = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"; // test net
} else if (networkType === "mainnet") {
  add = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"; // main net
}

export default add;