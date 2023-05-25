import { Request, Response } from 'express';
import CreateDocumentoMedicoService from '../services/CreateDocumentoMedicoService';
import DeleteDocumentoMedicoService from '../services/DeleteDocumentoMedicoService';
import ListDocumentoMedicoService from '../services/ListDocumentoMedicoService';
import ShowDocumentoMedicoService from '../services/ShowDocumentoMedicoService';
import UpdateDocumentoMedicoService from '../services/UpdateDocumentoMedicoService';

export default class DocumentoMedicoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listDocumentoMedico = new ListDocumentoMedicoService();

    const documentosMedicos = await listDocumentoMedico.execute();

    return response.json(documentosMedicos);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showDocumentoMedico = new ShowDocumentoMedicoService();

    const documentoMedico = await showDocumentoMedico.execute({ idDocumentoMedico: Number(id) });

    return response.json(documentoMedico);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idAtendimento, idTipoDocumento } = request.body;

    const createDocumentoMedico = new CreateDocumentoMedicoService();

    const documentoMedico = await createDocumentoMedico.execute({
      idAtendimento,
      idTipoDocumento,
    });

    return response.json(documentoMedico);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { idAtendimento, idTipoDocumento } = request.body;

    const updateDocumentoMedico = new UpdateDocumentoMedicoService();

    const documentoMedico = await updateDocumentoMedico.execute({
      idDocumentoMedico: Number(id),
      idAtendimento,
      idTipoDocumento,
    });

    return response.json(documentoMedico);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteDocumentoMedico = new DeleteDocumentoMedicoService();

    await deleteDocumentoMedico.execute({ idDocumentoMedico: Number(id) });

    return response.json([]);
  }
}
