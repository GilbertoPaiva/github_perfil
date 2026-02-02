import { useState, useEffect, use } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState("");

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log("O componente foi montado");

        return () => {
            console.log("O componente foi desmontado");
        }
    }, []);

    useEffect(() => {
        console.log("O estado materiaA mudou");
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        // setNome(evento.target.value);
        // setNome(estadoAnterior => evento.target.value);

        setNome(estadoAnterior => {
            console.log(estadoAnterior);
            return evento.target.value;
        }
        )
    }

    const renderizarResultado = () => {
        const media = (materiaA + materiaB + materiaC) / 3;
        if (media >= 7) {
            return <p>Aluno aprovado com média {media}</p>
        } else {
            return <p>Aluno reprovado com média {media}</p>
        }
    }

    return (
        <form>
            {/* <input type="text" placeholder="Nome do aluno" onChange={alteraNome} /> */}
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(Number(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(Number(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(Number(evento.target.value))} />
            {renderizarResultado()}
        </form>
    )
}

export default Formulario;