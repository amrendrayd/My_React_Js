export const GithubinfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/amrendrayd`)
    return response.json()
}