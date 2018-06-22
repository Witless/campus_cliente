export let FORM_FORMACION_ACADEMICA = {
  // titulo: 'FormacionAcademica',
  tipo_formulario: 'mini',
  alertas: true,
  btn: 'Guardar',
  modelo: 'InfoFormacionAcademica',
  campos: [
    {
      etiqueta: 'select',
      claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
      nombre: 'NivelFormacion',
      label_i18n: 'nivel_formacion',
      placeholder_i18n: 'nivel_formacion',
      requerido: true,
      tipo: 'text',
      key: 'valor',
      opciones: [
        { Id: 1, valor: 'Profesional' },
        { Id: 2, valor: 'Diplomado' },
        { Id: 3, valor: 'Especialización' },
        { Id: 4, valor: 'Maestría' },
        { Id: 5, valor: 'Doctorado' },
      ],
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
      nombre: 'AnioInicio',
      label_i18n: 'anio_inicio',
      placeholder_i18n: 'anio_inicio',
      requerido: true,
      tipo: 'number',
      minimo: 1900,
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
      nombre: 'AnioGraduacion',
      label_i18n: 'anio_graduacion',
      placeholder_i18n: 'anio_graduacion',
      requerido: true,
      tipo: 'number',
      minimo: 1900,
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
      nombre: 'DuracionCarrera',
      label_i18n: 'duracion_carrera',
      placeholder_i18n: 'duracion_carrera',
      requerido: true,
      tipo: 'number',
      minimo: 1,
    },
    {
      etiqueta: 'select',
      relacion: false,
      claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
      nombre: 'UnidadTiempoDuracionCarrera',
      label_i18n: 'unidad_tiempo_duracion_carrera',
      placeholder_i18n: 'unidad_tiempo_duracion_carrera',
      requerido: true,
      tipo: 'text',
      key: 'Id',
      opciones: [
        { Id: 'Años' },
        { Id: 'Semestres' },
        { Id: 'Trimestres' },
        { Id: 'Bimestres' },
        { Id: 'Meses' },
        { Id: 'Horas' },
      ],
  },
    {
      etiqueta: 'select',
      claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
      nombre: 'PaisUniversidad',
      label_i18n: 'pais_universidad',
      placeholder_i18n: 'pais_universidad',
      requerido: true,
      tipo: 'Lugar',
      key: 'Nombre',
      opciones: [],
      entrelazado: true,
    },
    {
      etiqueta: 'select',
      claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
      nombre: 'CiudadUniversidad',
      label_i18n: 'ciudad_universidad',
      placeholder_i18n: 'ciudad_universidad',
      requerido: true,
      tipo: 'Lugar',
      key: 'Nombre',
      opciones: [],
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
      nombre: 'NombreUniversidad',
      label_i18n: 'nombre_universidad',
      placeholder_i18n: 'nombre_universidad',
      requerido: true,
      tipo: 'text',
    },
    {
      etiqueta: 'select',
      claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
      nombre: 'Metodologia',
      label_i18n: 'metodologia',
      placeholder_i18n: 'metodologia',
      requerido: true,
      tipo: 'text',
      key: 'valor',
      opciones: [
        { Id: 1, valor: 'Presencial' },
        { Id: 2, valor: 'Semipresencial' },
        { Id: 3, valor: 'A distancia' },
        { Id: 4, valor: 'Virtual' },
      ],
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
      nombre: 'TituloObtenido',
      label_i18n: 'titulo_obtenido',
      placeholder_i18n: 'titulo_obtenido',
      requerido: true,
      tipo: 'text',
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
      nombre: 'TituloTrabajoGrado',
      label_i18n: 'titulo_trabajo_grado',
      placeholder_i18n: 'titulo_trabajo_grado',
      requerido: true,
      tipo: 'text',
    },
    {
      etiqueta: 'textarea',
      claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
      nombre: 'DescripcionTrabajoGrado',
      label_i18n: 'descripcion_trabajo_grado',
      placeholder_i18n: 'descripcion_trabajo_grado',
      requerido: true,
      tipo: 'text',
    },
  ],
}
