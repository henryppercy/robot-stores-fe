const handleError = async (response: Response, setError: any) => {
    if (!response.ok) {
        const data = await response.json()
        setError(response.status + ' - ' + data.message)
        return false
    }
    return true
}

export default handleError