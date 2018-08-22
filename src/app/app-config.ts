export const Config = {
    LOCAL: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        UBICACIONES_SERVICE: 'http://localhost:8085/v1/',
        PERSONA_SERVICE: 'http://localhost:8083/v1/',
        DOCUMENTO_SERVICE: 'http://localhost:8094/v1/',
        ORGANIZACION_SERVICE: 'http://localhost:8097/v1/',
        EXPERIENCIASERVICE: 'http://localhost:8099/v1/',
        ENTE_SERVICE: 'http://localhost:8096/v1/',
        CAMPUS_MID: 'http://localhost:8095/v1/',
        ADMISIONES_SERVICE: 'http://localhost:8887/v1/',
        PROGRAMA_ACADEMICO_SERVICE: 'http://localhost:8101/v1/',
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co:8244/authorize',
            CLIENTE_ID: 'bpT1LDoodD1wNUTPD3I2QM_0JVYa',
            RESPONSE_TYPE: 'id_token token',
            REDIRECT_URL: 'http://localhost:4200/',
            SCOPE: 'openid email role documento',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:4200/',
        },
    },
    PRUEBAS: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        UBICACIONES_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8085/v1/',
        PERSONA_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8083/v1/',
        DOCUMENTO_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8094/v1/',
        ORGANIZACION_SERVICE: 'http://localhost:8097/v1/',
        EXPERIENCIASERVICE: 'http://localhost:8099/v1/',
        ENTE_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8096/v1/',
        CAMPUS_MID: 'http://pruebasapi.intranetoas.udistrital.edu.co:8095/v1/',
        ADMISIONES_SERVICE: 'http://localhost:8080/v1/',
        PROGRAMA_ACADEMICO_SERVICE: 'http://localhost:8101/v1/',
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co:8244/authorize',
            CLIENTE_ID: 'bpT1LDoodD1wNUTPD3I2QM_0JVYa',
            RESPONSE_TYPE: 'id_token token',
            REDIRECT_URL: 'http://localhost:4200/',
            SCOPE: 'openid email role documento',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:4200/',
        },

    },
    PREPROD_LOCAL: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        UBICACIONES_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/ubicaciones_crud/v1/',
        PERSONA_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/persona_crud/v1/',
        ENTE_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/ente_crud/v1/',
        DOCUMENTO_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/documentos_crud/v1/',
        ORGANIZACION_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/organizacion_crud/v1/',
        EXPERIENCIASERVICE: 'https://autenticacion.udistrital.edu.co:8244/experiencia_academica_crud/v1/',
        CAMPUS_MID: 'https://autenticacion.udistrital.edu.co:8244/campus_mid/v1/',
        ADMISIONES_SERVICE: 'http://localhost:8080/v1/',
        PROGRAMA_ACADEMICO_SERVICE: 'http://localhost:8101/v1/',
        CONF_MENU_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co:8244/authorize',
            CLIENTE_ID: '860WlkU_AfhfieBuquBqTx4uuAYa',
            RESPONSE_TYPE: 'id_token token',
            REDIRECT_URL: 'https://pruebascampus.portaloas.udistrital.edu.co/',
            SCOPE: 'openid email role documento',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'https://pruebascampus.portaloas.udistrital.edu.co/',
        },
    },
    PREPROD_NUBE: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        UBICACIONES_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/ubicacion_crud/v1/',
        PERSONA_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/personas_crud/v1/',
        ENTE_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/ente_crud/v1/',
        DOCUMENTO_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/documento_crud/v1/',
        ORGANIZACION_SERVICE: 'http://localhost:8097/v1/',
        EXPERIENCIASERVICE: 'http://localhost:8099/v1/',
        CAMPUS_MID: 'https://autenticacion.portaloas.udistrital.edu.co/api/campus_mid_service/v1/',
        ADMISIONES_SERVICE: 'http://localhost:8080/v1/',
        PROGRAMA_ACADEMICO_SERVICE: 'http://localhost:8101/v1/',
        CONF_MENU_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
            CLIENTE_ID: 'iKu3JoaAbsqLoQTpIjjFlz9RfIga',
            RESPONSE_TYPE: 'id_token token',
            SCOPE: 'openid email role documento',
            REDIRECT_URL: 'https://pruebascampus.portaloas.udistrital.edu.co/',
            SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'https://pruebascampus.portaloas.udistrital.edu.co/',
        },
    },
};

export const GENERAL = {
    ENTORNO: Config.LOCAL,
};
