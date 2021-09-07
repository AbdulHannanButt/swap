import { networkType } from "../../networkType.js";

let add = "";
if (networkType === "testnet") {
  add = "0xc778417E063141139Fce010982780140Aa0cD5Ab"; // test net
} else if (networkType === "mainnet") {
  add = "0xc778417E063141139Fce010982780140Aa0cD5Ab"; // main net
}

export default add;