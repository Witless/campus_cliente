
export let DOCUMENTOS = {
    titulo: 'Documentos',
    clase: 'col-6',
    btn: 'Siguiente',
    alertas: true,
    btnLimpiar: 'Salir',
    modelo: 'Documentos',
    campos: [
        {
            etiqueta: 'input',
            nombre: 'Documento1',
            label: '1. Cédula de ciudadanía: descripción indicada del documento - 5 MB',
            placeholder: 'Ingrese su documento',
            requerido: true,
            tipo: 'file',
        },
        /**
            <div class="seguir">
                <div class="col-xs-6 col-xs-offset-3">
                    <label class="progreso">
                        <progress max="100" value="48"></progress> 48%
                    </label>
                </div>
            </div>
        **/
    ],
}
