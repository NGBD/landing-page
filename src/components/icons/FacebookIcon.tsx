import React from "react"
import Link from "next/link"

function FacebookIcon(props) {
  return (
    <Link href={``}>
      <a target="_blank" className="scale-95 hover:scale-100 smooth-transform">
        <svg
          width={59}
          height={59}
          viewBox="0 0 59 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M50.66 58.86H8.34C3.753 58.86 0 55.116 0 50.54V8.32C0 3.744 3.753 0 8.34 0h42.32C55.247 0 59 3.744 59 8.32v42.22c0 4.576-3.753 8.32-8.34 8.32z"
            fill="currentColor"
          />
          <path
            d="M37.67 31.486l.975-6.338h-6.099v-4.114c0-1.737.85-3.427 3.581-3.427H38.9V12.21s-2.517-.427-4.92-.427c-5.02 0-8.304 3.037-8.304 8.534v4.83h-5.582v6.34h5.582V46.81c1.121.177 2.268.265 3.435.265a22.68 22.68 0 003.435-.265V31.486h5.124z"
            fill="#fff"
          />
        </svg>
      </a>
    </Link>
  )
}

export default FacebookIcon

export function FacebookIconFooter(props) {
  return (
    <Link href={``}>
      <a target="_blank" className="scale-95 hover:scale-100 smooth-transform">
        <svg
          width={59}
          height={59}
          viewBox="0 0 59 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M50.66 58.86H8.34C3.753 58.86 0 55.116 0 50.54V8.32C0 3.744 3.753 0 8.34 0h42.32C55.247 0 59 3.744 59 8.32v42.22c0 4.576-3.753 8.32-8.34 8.32z"
            fill="#fff"
          />
          <path
            d="M37.67 31.486l.975-6.338h-6.099v-4.114c0-1.737.85-3.427 3.581-3.427H38.9V12.21s-2.517-.427-4.92-.427c-5.02 0-8.304 3.037-8.304 8.534v4.83h-5.582v6.34h5.582V46.81c1.121.177 2.268.265 3.435.265a22.68 22.68 0 003.435-.265V31.486h5.124z"
            fill="#000000"
          />
        </svg>{" "}
      </a>
    </Link>
  )
}
