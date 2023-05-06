import React from "react"
import Link from "next/link"

function TelegramIcon(props) {
  return (
    <Link href={`https://t.me/Demoleio`}>
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
            d="M46.495 15.99c-.125-.354-.265-.453-.495-.54-.5-.188-1.344.093-1.344.093S14.752 26.265 13.047 27.456c-.37.255-.49.406-.553.577-.297.848.626 1.217.626 1.217l7.71 2.507s.286.041.39-.021c1.752-1.108 17.64-11.113 18.557-11.45.145-.042.25.004.224.103-.365 1.285-14.168 13.52-14.168 13.52s-.052.063-.083.14l-.016-.01-.72 7.629s-.302 2.335 2.044 0a66.69 66.69 0 014.05-3.697c2.648 1.825 5.505 3.843 6.735 4.898.62.53 1.136.62 1.563.603 1.168-.041 1.497-1.326 1.497-1.326s5.447-21.882 5.629-24.81c.016-.285.042-.467.047-.665-.01-.276-.037-.551-.084-.681z"
            fill="#fff"
          />
        </svg>
      </a>
    </Link>
  )
}

export default TelegramIcon

export function TelegramIconMobile(props) {
  return (
    <Link href={`https://t.me/Demoleio`}>
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
            d="M46.495 15.99c-.125-.354-.265-.453-.495-.54-.5-.188-1.344.093-1.344.093S14.752 26.265 13.047 27.456c-.37.255-.49.406-.553.577-.297.848.626 1.217.626 1.217l7.71 2.507s.286.041.39-.021c1.752-1.108 17.64-11.113 18.557-11.45.145-.042.25.004.224.103-.365 1.285-14.168 13.52-14.168 13.52s-.052.063-.083.14l-.016-.01-.72 7.629s-.302 2.335 2.044 0a66.69 66.69 0 014.05-3.697c2.648 1.825 5.505 3.843 6.735 4.898.62.53 1.136.62 1.563.603 1.168-.041 1.497-1.326 1.497-1.326s5.447-21.882 5.629-24.81c.016-.285.042-.467.047-.665-.01-.276-.037-.551-.084-.681z"
            fill="#000000"
          />
        </svg>
      </a>
    </Link>
  )
}
