export class Usuario {
    id_usuario?: number;
    id_persona?: number;
    id_rol?: number;
    rol?: string;
    nombre?: string;
    usuario?: string;
    clave?: string;
    estado?: number;
    accesos?: string[];
    grupos?: string[];
    token?: string;
}
