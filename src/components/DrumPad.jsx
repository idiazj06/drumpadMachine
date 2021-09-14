import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


export const Wrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:10px;
    padding:10px;        
`;

export const Button = styled.button`
    width:150px;
    height:150px;
`;

export const ContenedorCheck = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
`;


const DrumPad = () => {

    const [letrasTeclado, setLetrasTeclado] = useState([])
    const [power, setPower] = useState(false)
    const [volumen, setVolumen] = useState('0.5')
    const [bank, setBank] = useState(false)

    useEffect(() => {
        let url = ''

        if (bank === true) {
            url = 'http://localhost:4000/bank2'
        } else {
            url = 'http://localhost:4000/bank1'
        }

        fetchData(url)
    }, [bank])

    const fetchData = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        // console.log(data)
        setLetrasTeclado(data)

    }

    const handleClick = (data) => {
        console.log(data)
        if (power === true) {
            let etiquetaAudio = document.createElement("audio")
            etiquetaAudio.setAttribute("src", data.source)
            etiquetaAudio.play()
            etiquetaAudio.volume = volumen
        } else {
            return
        }

    }


    const handleChange = (e) => {
        setPower(!power)
    }
    const handleBankChange = (e) => {
        setBank(!bank)
    }

    const handleVolumen = (e) => {
        setVolumen(e.target.value)
    }

    document.addEventListener('keypress', e => {
        const target = e.code
        const sound = document.getElementById(target)

        if (power === true) {
            if (sound === null) {
                console.log(true)
                return
            } else {
                sound.play()
                sound.volume = volumen
            }
        } else {
            return
        }
    })

    return (
        <div className="container d-flex align-items-center justify-content-center bg-dark text-white mt-4 w-50 p-5" >
            <div id="drum-machine">
                <Wrapper id="display">
                    {
                        letrasTeclado.map((data, index) => (
                            <Button
                                className="drum-pad"
                                key={index}
                                type="button"
                                onClick={() => handleClick(data)}
                            >{data.key}</Button>
                        ))
                    }
                    {
                        letrasTeclado.map((data, index) => (
                            <audio
                                key={index}
                                className='clip'
                                id={data.key}
                                name={data.trigger}
                                src={data.source}
                            />
                        ))
                    }
                </Wrapper>
            </div>

            <ContenedorCheck className="controls">
                <div className="form-check form-switch mb-5">
                    <label htmlFor="flexSwitchCheckDefault">POWER</label>
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={handleChange} />
                </div>

                <label for="customRange2" class="form-label">Volume</label>
                <input type="range" class="form-range" min="0" max="1" step="0.1" id="customRange2" onChange={handleVolumen} />

                <div className="form-check form-switch mt-5">
                    <label htmlFor="flexSwitchCheckDefault">BANK</label>
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={handleBankChange} />
                </div>
            </ContenedorCheck>
        </div>
    )
}

export default DrumPad
