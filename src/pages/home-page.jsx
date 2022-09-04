
import { useEffect } from "react"
import { bitcoinService } from "../services/bitcoinService"
import { userService } from "../services/userService"

export const HomePage = () => {

    useEffect = (() => {
        loadUser()
    }, [])

    const loadUser = () => {
        const user = userService.getUser()
        console.log(user)
    }

    return <section className="home-page">
        <h1>Home page</h1>
        <h2></h2>
    </section>
}