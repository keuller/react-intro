import React from 'react'

function fullName({ nome, sobrenome }) {
    return `${nome} ${sobrenome}`
}

export default function Ola(props) {
    let name = fullName({ ...props })
    return (
    <h3 className="font-semibold">Ol&aacute; {name}!</h3>
    )
}
