import React, { useEffect, useState } from "react";
import '../styles/indexapp.css';
import 'animate.css';
import CopyIcon from "../components/copy-icon";
import RefreshIcon from "../components/refresh-icon";
import LockIcon from "../components/lock-icon";
import OkIcon from '../components/ok-icon';

const IndexApp = ({ lenguaje }) => {
    document.documentElement.lang = lenguaje;
    const [password, setPassword] = useState("");
    const [copySuccess, setCopySuccess] = useState("");
    const [animacionActiva, setAnimacionActiva] = useState(false);

    useEffect(() => {
        // Cambia el atributo lang de la etiqueta <html>
        document.documentElement.lang = lenguaje;
    }, [lenguaje]);

    // Función para generar una contraseña segura
    const generarContraseñaSegura = (longitud = 18) => {
        let contraseña = "";
        for (let i = 0; i < longitud; i++) {
            const tipo = Math.floor(Math.random() * 4);
            let caracter;
            switch (tipo) {
                case 0:
                    caracter = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Minúscula
                    break;
                case 1:
                    caracter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Mayúscula
                    break;
                case 2:
                    caracter = String.fromCharCode(48 + Math.floor(Math.random() * 10)); // Número
                    break;
                case 3:
                    const caracteresEspeciales = "!@#$%^&*()_+{}[]";
                    caracter = caracteresEspeciales.charAt(Math.floor(Math.random() * caracteresEspeciales.length));
                    break;
                default:
                    break;
            }
            contraseña += caracter;
        }
        return contraseña;
    };

    // Generar contraseña cuando el componente se monta
    useEffect(() => {
        setPassword(generarContraseñaSegura());
    }, []);

    // Función para copiar la contraseña al portapapeles
    const copiarContraseña = () => {
        navigator.clipboard.writeText(password)
            .then(() => {
                setCopySuccess(
                    <span>Copiado</span>
                );
                setAnimacionActiva(true); // Activar animación
                setTimeout(() => {
                    setCopySuccess("");
                    setAnimacionActiva(false); // Desactivar animación después de 2 segundos
                }, 2000);
            })
            .catch(() => setCopySuccess("Error al copiar"));
    };

    return (
        <div className="Indexapp">
            <h1>LockItUp</h1>
            <span>Genera una contraseña segura</span>
            <div className="input-password">
                <p>{password}</p>
            </div>
            <div className="buttons-password">
                <button onClick={() => setPassword(generarContraseñaSegura())}>
                    <RefreshIcon width={20} height={20} color="#fff" />
                    Generar Nueva Clave
                </button>
                <button onClick={copiarContraseña}>
                    <CopyIcon width={20} height={20} color="#fff" />
                    Copiar
                </button>
            </div>
            <div
                className={`mensaje-password ${animacionActiva ? 'animate__animated animate__backInDown' : ''}`}
                style={{ border: animacionActiva ? '1px solid #58d68d ' : 'none' }}
            >
                {copySuccess && <p>{copySuccess} <OkIcon width={20} height={20} color="#58d68d" /></p>}
            </div>
        </div>
    );
};

export default IndexApp;