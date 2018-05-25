import * as Nuxeo from 'nuxeo';
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { GENERAL } from './../../../app-config'
import { DocumentoService } from '../../../@core/data/documento.service';


@Component({
    selector: 'ngx-nuxeo',
    template: ``,
})
export class NuxeoComponent implements OnChanges {
    nuxeo: any;
    @Input('files') files: any;
    @Input('uid') uid: any;
    @Output('saveApi') saveApi: EventEmitter<any> = new EventEmitter();
    @Output('urlFile') urlFile: EventEmitter<any> = new EventEmitter();

    constructor(private documentoService: DocumentoService) {
    }

    guardar(Files, nuxeo, saveApi, documentservice): any {
        nuxeo.connect()
            .then(function (client) {
                Files.forEach(element => {
                    nuxeo.operation('Document.Create')
                        .params({
                            type: 'Picture',
                            name: element.nombre,
                            properties: 'dc:title=' + element.nombre,
                        })
                        .input('/default-domain/workspaces/Pruebas Planestic')
                        .execute()
                        .then(function (doc) {
                            const nuxeoBlob = new Nuxeo.Blob({ content: element.file });
                            nuxeo.batchUpload()
                                .upload(nuxeoBlob)
                                .then(function (response) {
                                    element.uid = doc.uid
                                    return nuxeo.operation('Blob.AttachOnDocument')
                                        .param('document', doc.uid)
                                        .input(response.blob)
                                        .execute()
                                        .then(function (respuesta) {
                                            console.info(respuesta);
                                            saveApi.emit(element);
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
                        });
                })
            });
    }

    cargar(docid, nuxeo, urlfile) {
        let url = '';
        let error = null;
        if (docid != null) {
            nuxeo.header('X-NXDocumentProperties', '*');
            nuxeo.request('/id/' + docid)
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

    ngOnChanges(changes) {
        this.nuxeo = new Nuxeo({
            baseURL: GENERAL.ENTORNO.NUXEO.PATH,
            auth: {
                method: 'basic',
                username: 'Administrator',
                password: 'S1st3m4s04S=Fr331P4',
            },
        });
        console.info(changes);
        this.documentoService.isRun().subscribe(res => {
            if (res === { Status: 'Ok' })
                if (changes.files !== undefined && changes.files !== []) {
                    if (changes.files.currentValue !== undefined) {
                        this.files = changes.files.currentValue;
                        this.guardar(this.files, this.nuxeo, this.saveApi, this.documentoService);
                    }
                }
            if (changes.uid !== undefined && changes.uid !== null) {
                this.cargar(this.uid, this.nuxeo, this.urlFile);
            }
        });
    }
}
