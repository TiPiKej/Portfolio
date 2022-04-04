import Link from "next/link";
import { useEffect, useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

export default function ScrollArrow() {
  const [ isOnTop, setIsOnTop ] = useState<boolean>(true);
  let timeoutWaiter: NodeJS.Timeout | null = null;
  const timeoutDelayMs = 200;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleScrollClick = () => {
    window.scrollTo({
      top: isOnTop ? 200 : 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    if (timeoutWaiter) clearTimeout(timeoutWaiter)

    timeoutWaiter = setTimeout(() => {

      setIsOnTop(window.scrollY === 0);

    }, timeoutDelayMs);
  }

  return (
    <div
      className="cursor-pointer hover:text-secondary transition-all w-full flex justify-center items-center text-7xl h-24 sticky top-0 bg-black"
      onClick={handleScrollClick}
    >
      <BsChevronCompactDown className={`transition-all ${!isOnTop && "rotate-180"}`} />
    </div>
  )
}
