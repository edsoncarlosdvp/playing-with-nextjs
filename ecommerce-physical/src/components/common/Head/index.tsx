import HeadApp from 'next/head'

export const Head = (): JSX.Element => {
    return (
        <>
            <HeadApp>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </HeadApp>
        </>
    )
}
