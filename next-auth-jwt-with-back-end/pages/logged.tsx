import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"
import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { getAPIClient } from "../service/getClient"

const logged = (): JSX.Element => {

    const { user } = useContext(AuthContext)

    useEffect(() => {
        // api.get('/users');
    }, [])

    return (<div><h1>Você está logado</h1></div>)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const apiClient = getAPIClient(ctx);
    const { ['appnextauth.token']: token } = parseCookies(ctx)

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    await apiClient.get('/user')

    return {
        props: {}
    }
}

export default logged