import { useEffect } from 'react'

function useDocTitleChanger(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocTitleChanger
