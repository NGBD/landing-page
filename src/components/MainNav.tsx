import Link from "next/link"
import { useRouter } from "next/router"
import { useWeb3React } from "@web3-react/core"
import { Web3Provider } from "@ethersproject/providers"
import ModalConnectWallet from "./ModalConnectWallet"
import MobileNav from "./MobileNav"
import Logo from "./Logo"
import CommingSoon from "./CommingSoon"

function MainNav() {
  const context = useWeb3React<Web3Provider>()
  const { account } = context

  return (
    <div className="bg-[#470F9D] absolute top-0 left-0 right-0 bg-opacity-100 md:bg-opacity-60 z-10 flex items-center justify-start w-full px-4 py-1 md:py-3">
      <div className="flex items-center justify-between w-full max-w-[1428px] mx-auto">
        <div className="md:relative">
          <Link href="/">
            {/* <div className="py-0 cursor-pointer">
              <Logo />
            </div> */}
            <img
              src="/logo.png"
              alt="logo"
              className="max-w-[90px] md:max-w-[180px] md:absolute md:-top-7 md:left-0 cursor-pointer"
            />
          </Link>
        </div>

        <div className="items-center md:flex">
          <div className="hidden md:flex">
            <CommingSoon>
              <Item href="/">Summon</Item>
            </CommingSoon>
            <CommingSoon>
              <Item href="/">Market Place</Item>
            </CommingSoon>
            <CommingSoon>
              <Item href="/">MonsterNest</Item>
            </CommingSoon>
            <Item href="https://app.demole.io/training-ground">
              Training Ground
            </Item>
            {/* <Item href="/">About us</Item> */}
          </div>
        </div>

        {/* <button className="text-white py-2 px-8 ml-[10px] text-sm md:text-base">
          <ModalConnectWallet
            label={
              account
                ? `${account.substring(0, 6)}...${account.substring(
                    account.length - 4,
                  )}`
                : "Connect Wallet"
            }
          />
        </button> */}
      </div>

      <div className="flex items-center md:hidden">
        <div className="ml-3 md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  )
}

export default MainNav

function Item({ children, href }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href || "/"}>
      <div className={`flex mx-3 py-4 px-2`}>
        <p
          className={`${
            !isActive ? "text-white" : "text-gradient-yellow"
          } cursor-pointer font-primary uppercase`}
        >
          {children}
        </p>
      </div>
    </Link>
  )
}
