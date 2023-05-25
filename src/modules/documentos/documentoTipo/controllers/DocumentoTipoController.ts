import { Request, Response } from 'express';
import CreateDocumentoTipoService from '../services/CreateDocumentoTipoService';
import DeleteDocumentoTipoService from '../services/DeleteDocumentoTipoService';
import ListDocumentoTipoService from '../services/ListDocumentoTipoService';
import ShowDocumentoTipoService from '../services/ShowDocumentoTipoService';
import UpdateDocumentoTipoService from '../services/UpdateDocumentoTipoService';

export default class DocumentoTipoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listDocumentoTipo = new ListDocumentoTipoService();

    const documentoTipos = await listDocumentoTipo.execute();

    return response.json(documentoTipos);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showDocumentoTipo = new ShowDocumentoTipoService();

    const documentoTipo = await showDocumentoTipo.execute({ idDocumentoTipo: Number(id) });

    return response.json(documentoTipo);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;

    const createDocumentoTipo = new CreateDocumentoTipoService();

    const documentoTipo = await createDocumentoTipo.execute({
      nome,
      status,
    });

    return response.json(documentoTipo);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { nome, status } = request.body;

    const updateDocumentoTipo = new UpdateDocumentoTipoService();

    const documentoTipo = await updateDocumentoTipo.execute({
      idDocumentoTipo: Number(id),
      nome,
      status,
    });

    return response.json(documentoTipo);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteDocumentoTipo = new DeleteDocumentoTipoService();

    await deleteDocumentoTipo.execute({ idDocumentoTipo: Number(id) });

    return response.json([]);
  }
}
