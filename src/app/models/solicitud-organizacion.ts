export class SolicitudOrganizacion {
    
    id_solicitudorg: number;
	id_usuariosol: number;
	id_organizacion: number;
	id_tiposol: number;
	fec_registro: String;
	codigo_exp: String;
	observaciones: String;
    id_solestado: String;
}

export class Solicitud_Fucion{

    id_solicitudorg: number;
    id_usuariosol: number;
    fec_registro: String;
    nombreorg: String;
    numpartreg: String;
    id_tipodeno: number;
    totalmiembros: number;
    fec_iniactv: number;
}
