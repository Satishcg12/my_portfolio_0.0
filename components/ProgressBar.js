import { useRouter } from "next/router"
import { useEffect, useState } from "react"
const ProgressBar = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const handleStart = () => setIsLoading(true)
        const handleComplete = () => setIsLoading(false) 

        router.events.on("routeChangeStart", () => handleStart())
        router.events.on("routeChangeComplete", () => handleComplete())
        router.events.on("routeChangeError", () => handleComplete())
        return () => {
            router.events.off("routeChangeStart", handleStart())
            router.events.off("routeChangeComplete", handleComplete())
            router.events.off("routeChangeError", handleComplete())
        }
    }, [router])
    return isLoading &&(
    <div className="text-8xl absolute bg-gray-500 h-1 shadow-lg inset-0 z-50 animate-bar"></div>
  )
}

export default ProgressBar