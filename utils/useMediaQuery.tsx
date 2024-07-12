import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query); //미디어 쿼리 범위가 일치하는지 true, flase 반환
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener(`change`, listener);
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;
