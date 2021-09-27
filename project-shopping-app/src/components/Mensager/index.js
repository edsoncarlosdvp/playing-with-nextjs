import React from 'react'
import { useSelector } from 'react-redux'

export default function Mensager() {

    const isShow = useSelector((state) => state.layout.showMensager)

    return (
        <>
            {isShow && (
                <div className="container mt-3">
                    <div className="alert alert-success" role="alert">
                        Cadastrado com sucesso!!!
                    </div>
                </div>
            )}
        </>
    )
}