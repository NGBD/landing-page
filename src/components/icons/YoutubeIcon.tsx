import React from "react"
import Link from "next/link"

function YoutubeIcon(props) {
  return (
    <Link href={`https://www.youtube.com/channel/UCs69Rvm26wDYf7-r3YX2Bzw`}>
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
            d="M46.87 20.723a4.54 4.54 0 00-3.205-3.198c-2.825-.755-14.162-.755-14.162-.755s-11.337 0-14.163.755a4.541 4.541 0 00-3.205 3.198c-.756 2.818-.756 8.705-.756 8.705s0 5.886.756 8.704a4.541 4.541 0 003.205 3.199c2.826.754 14.163.754 14.163.754s11.337 0 14.162-.754a4.54 4.54 0 003.206-3.199c.755-2.818.755-8.704.755-8.704s0-5.882-.755-8.705zM25.876 34.856V24.004l9.419 5.424-9.42 5.428z"
            fill="#fff"
          />
        </svg>
      </a>
    </Link>
  )
}

export default YoutubeIcon

export function YoutubeIconMobile(props) {
  return (
    <Link href={`https://www.youtube.com/channel/UCs69Rvm26wDYf7-r3YX2Bzw`}>
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
            d="M46.87 20.723a4.54 4.54 0 00-3.205-3.198c-2.825-.755-14.162-.755-14.162-.755s-11.337 0-14.163.755a4.541 4.541 0 00-3.205 3.198c-.756 2.818-.756 8.705-.756 8.705s0 5.886.756 8.704a4.541 4.541 0 003.205 3.199c2.826.754 14.163.754 14.163.754s11.337 0 14.162-.754a4.54 4.54 0 003.206-3.199c.755-2.818.755-8.704.755-8.704s0-5.882-.755-8.705zM25.876 34.856V24.004l9.419 5.424-9.42 5.428z"
            fill="#000000"
          />
        </svg>
      </a>
    </Link>
  )
}
