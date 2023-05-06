import { useMemo } from "react"
import {
  getErc20Contract,
  getPrivateSaleContract,
} from "../lib/contract-accessor"
import useActiveWeb3React from "./useWeb3"

export const useERC20 = (address: string) => {
  const { library } = useActiveWeb3React()
  return useMemo(
    () => getErc20Contract(address, library.getSigner()),
    [address, library],
  )
}

export const usePrivateSaleContract = (address: string) => {
  const { library } = useActiveWeb3React()
  return useMemo(
    () => getPrivateSaleContract(address, library.getSigner()),
    [address, library],
  )
}
