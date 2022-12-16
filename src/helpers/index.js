
export const generaid = () => {
    const random = Math.random().toString(36).substr(2)

    const fecha = Date.now().toString(36)

    return random + fecha
}

export const formatearfecha = fecha =>{
    const fechanueva = new Date(fecha)

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return fechanueva.toLocaleDateString('es-ES', opciones)


}