import { networkType } from "./networkType";
import uniswapContractAdd from "./networkChain/contractAddress/uniswapContractAdd";
import uniswapAbi from "./networkChain/abi/uniswapAbi";

import uniSwapFactoryAdd from "./networkChain/contractAddress/uniSwapFactoryAdd";
import uniSwapFactoryAbi from "./networkChain/abi/uniSwapFactoryAbi";

import uniswapTokenAdd from "./networkChain/contractAddress/uniswapTokenAdd";
import uniswapTokenAbi from "./networkChain/abi/uniswapTokenAbi";

import daiTokenAdd from "./networkChain/contractAddress/daiTokenAdd";
import daiTokenAbi from "./networkChain/abi/daiTokenAbi";

import ethTokenAdd from "./networkChain/contractAddress/ethTokenAdd";
import ethTokenAbi from "./networkChain/abi/ethTokenAbi";

import oneinchContractAdd from "./networkChain/contractAddress/oneinchContractAdd";
import oneinchAbi from "./networkChain/abi/oneinchAbi";


export const blockChainConfig = [
  {
    name: "Etherium",
    key: "etherium",
    networkIdTestNet: networkType === "testnet" ? "4" : "4",
    networkIdMainNet: networkType === "testnet" ? "4" : "4",
    providerUrl:
      networkType === "testnet"
        ? "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
        : "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    providerUrlForMainnet:
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    uniswapConConfig: { add: uniswapContractAdd, abi: uniswapAbi },
    uniswapTokenConConfig: { add: uniswapTokenAdd, abi: uniswapTokenAbi },
    daiTokenConConfig: { add: daiTokenAdd, abi: daiTokenAbi },
    ethTokenConConfig: { add: ethTokenAdd, abi: ethTokenAbi },
    uniswapFactoryConConfig: { add: uniSwapFactoryAbi, abi: uniSwapFactoryAdd },
    oneinchConConfig: { add: oneinchContractAdd, abi: oneinchAbi },
  },
];
