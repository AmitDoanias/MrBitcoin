import { useState, useEffect } from "react"
import { bitcoinService } from "../services/bitcoinService"
import { userService } from "../services/userService"

export const HomePage = () => {

    const [user, setUser] = useState()
    const [userRate, setUserRate] = useState()

    useEffect(() => {
        loadUser()

    }, [])

    const loadUser = async () => {
        const user = userService.getUser()
        setUser(user)
        const userRate = await bitcoinService.getRate(user.coins)
        setUserRate(userRate)
    }

    console.log('user', user)

    if (!user) return <div>Loading..</div>
    return <section className="home-page">
        {/* <h1>Home page</h1> */}
        <h2>{user.name}</h2>
        <h2>USD: {user.coins}</h2>
        <h2>Bitcoin: {userRate}</h2>
    </section>
}