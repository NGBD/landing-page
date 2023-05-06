import React from "react"

function AmountInput({
  label = "From",
  balance = "",
  myStaked = "",
  placeholder = "0",
  tokenSymbol,
  ...props
}) {
  return (
    <div className="py-4">
      <label
        htmlFor="amount"
        className="flex justify-between text-sm text-inputText"
      >
        <p className="text-base md:text-lg text-[#6F6C99]">{label}</p>
        {balance && (
          <p className="text-base md:text-lg text-[#6F6C99]">
            Balance: {balance}
          </p>
        )}
      </label>

      <label
        htmlFor="amount"
        className="flex justify-between items-center w-full px-6 min-h-[55px] mt-2 border-[1px] border-[#5096FE98] transform -skew-x-6"
      >
        <input
          id="amount"
          type="number"
          placeholder={placeholder}
          {...props}
          className="bg-transparent text-inputText w-[75%] text-base md:text-lg outline-none font-bold placeholder-inputText transform skew-x-6"
        />

        <div className="flex items-center transform skew-x-6">
          <img
            src={`/images/tokens/${tokenSymbol}.${
              tokenSymbol === "MON" ? "png" : "svg"
            }`}
            style={{ width: 24, height: 24 }}
            alt="token"
          />
          <p className="ml-2 text-base md:text-lg uppercase min-w-[48px]">
            {tokenSymbol}
          </p>
        </div>
      </label>
    </div>
  )
}

export default AmountInput
