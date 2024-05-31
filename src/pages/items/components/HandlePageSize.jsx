import { useState, useEffect } from 'react';

function HandlePageSize() {
    const [pageSize, setPageSize] = useState(getPageSize());

    useEffect(() => {
        function handleResize() {
            const newSize = getPageSize();
            if (newSize !== pageSize) {
                setPageSize(newSize);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [pageSize]);

    return pageSize;
}

function getPageSize() {
    if (window.innerWidth >= 1024) {
        return 10;
    }
    if (window.innerWidth >= 768) {
        return 6;
    }
    return 4;
}

export default HandlePageSize;
