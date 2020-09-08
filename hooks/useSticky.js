import {useEffect, useState} from "react"

function useSticky() {
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        window.scrollY > 200 ? setSticky(true) : setSticky(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, {passive: true})
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [])

    return {isSticky}
}

export default useSticky
