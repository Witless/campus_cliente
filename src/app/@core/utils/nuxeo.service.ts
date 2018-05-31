import * as Nuxeo from 'nuxeo';
import { Injectable } from '@angular/core';
import { GENERAL } from './../../app-config';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Documento } from './../data/models/documento'
import { DocumentoService } from '../../@core/data/documento.service';


@Injectable()
export class NuxeoService {
    nuxeo: Nuxeo;
    constructor(private documentoService: DocumentoService) {
        this.nuxeo = new Nuxeo({
            baseURL: GENERAL.ENTORNO.NUXEO.PATH,
            auth: {
                method: 'basic',
                username: 'Administrator',
                password: 'S1st3m4s04S=Fr331P4',
            },
        });

    private documento$ = new Subject<Documento>();
    documentos$: Observable<Documento[]>;

    public guardar(Files) : Observable<Documento[]>{
        this.nuxeo.connect()
            .then(function (client) {
                Files.forEach(element => {
                    this.documentoService.get('tipo_documento/' + element.IdDocumento)
                        .subscribe(res => {
                            if (res !== null) {
                                console.info(res);
                                this.nuxeo.operation('Document.Create')
                                    .params({
                                        type: res.Extension,
                                        name: element.nombre,
                                        properties: 'dc:title=' + element.nombre,
                                    })
                                    .input(res.Workspace)
                                    .execute()
                                    .then(function (doc) {
                                        const nuxeoBlob = new Nuxeo.Blob({ content: element.file });
                                        this.nuxeo.batchUpload()
                                            .upload(nuxeoBlob)
                                            .then(function (response) {
                                                element.uid = doc.uid
                                                return this.nuxeo.operation('Blob.AttachOnDocument')
                                                    .param('document', doc.uid)
                                                    .input(response.blob)
                                                    .execute()
                                                    .then(function (respuesta) {
                                                        const documentoPost = {
                                                            Enlace: doc.uid,
                                                            Nombre: element.nombre,
                                                            TipoDocumento: { Id: element.IdDocumento },
                                                        }
                                                        this.documentoService.post('documento', documentoPost)
                                                            .subscribe(respuestaPost => {
                                                                this.documentos$.defer(function(){return respuestaPost});
                                                            })
                                                    });
                                            })
                                            .catch(function (error) {
                                                console.info(error);
                                                throw error;
                                            });
                                    })
                                    .catch(function (error) {
                                        console.info(error);
                                        throw error;
                                    })
                            }
                        });
                })
            });
            return this.documentos$;
    }

cargar(docid, nuxeo, urlfile) {
    let url = '';
    let error = null;
    if (docid != null) {
        this.nuxeo.header('X-NXDocumentProperties', '*');
        this.nuxeo.request('/id/' + docid)
            .get()
            .then(function (response) {
                response.fetchBlob()
                    .then(function (fileUrl) {
                        console.info(fileUrl);
                        url = URL.createObjectURL(fileUrl);
                        urlfile.emit(url);
                        window.open(url);
                    })
                    .catch(function (response2) {
                        error = response2;
                    });
                console.info(response);
            })
            .catch(function (response) {
                error = response
            });
        if (error !== null) {
            console.info(error);
        } else {
            console.info(url);
        }
    };
}
}
