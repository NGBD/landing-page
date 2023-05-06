import { ethers } from "ethers"
import {
  Airdrop__factory,
  Erc20__factory,
  PrivateSale__factory,
} from "../../types"
import { simpleRpcProvider } from "./providers"
import UncheckedJsonRpcSigner from "./signer"

const RPC_URL =
  process.env.NEXT_PUBLIC_PRODUCT_ENV === "mainnet"
    ? "https://bsc-dataseed.binance.org/"
    : "https://data-seed-prebsc-1-s1.binance.org:8545/"

export const ETHER_PROVIDER = new ethers.providers.JsonRpcProvider(RPC_URL)

export function getProviderOrSigner(library: any, account: any) {
  return account
    ? new UncheckedJsonRpcSigner(library.getSigner(account))
    : ETHER_PROVIDER
}

export function isAddress(value) {
  try {
    return ethers.utils.getAddress(value.toLowerCase())
  } catch {
    return false
  }
}

export function getAirdropContractWithSigner(
  address: string,
  library: any,
  account: any,
) {
  return Airdrop__factory.connect(
    address,
    getProviderOrSigner(library, account),
  )
}

// export function getErc20Contract(address: string, library: any, account: any) {
//   return Erc20__factory.connect(address, getProviderOrSigner(library, account));
// }

export function getErc20Contract(
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) {
  const signerOrProvider = signer ?? simpleRpcProvider
  return Erc20__factory.connect(address, signerOrProvider)
}

export function getPrivateSaleContract(
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) {
  const signerOrProvider = signer ?? simpleRpcProvider
  return PrivateSale__factory.connect(address, signerOrProvider)
}
