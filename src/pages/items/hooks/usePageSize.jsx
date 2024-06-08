import useViewport from 'shared/hooks/useViewport';

function usePageSize(type) {
    const { deviceType } = useViewport();

    const getPageSize = (type, device) => {
        if (type === 'all') {
            if (device === 'mobile') return 4;
            if (device === 'tablet') return 6;
            if (device === 'desktop') return 10;
        }
        if (type === 'best') {
            if (device === 'mobile') return 1;
            if (device === 'tablet') return 2;
            if (device === 'desktop') return 4;
        }
    };

    const pageSize = getPageSize(type, deviceType);
    return pageSize;
}

export default usePageSize;
