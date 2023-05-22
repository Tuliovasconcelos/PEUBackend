import { Request, Response } from 'express';
import CreateConvenioService from '../services/CreateConvenioService';
import DeleteConvenioService from '../services/DeleteConvenioService';
import ListConvenioService from '../services/ListConvenioService';
import ShowConvenioService from '../services/ShowConvenioService';
import UpdateConvenioService from '../services/UpdateConvenioService';

export default class ConveniosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listConvenio = new ListConvenioService();

    const convenios = await listConvenio.execute();

    return response.json(convenios);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showConvenio = new ShowConvenioService();

    const convenio = await showConvenio.execute({ idConvenio: Number(request.params.idConvenio) });

    return response.json(convenio);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;

    const createConvenio = new CreateConvenioService();

    const convenio = await createConvenio.execute({
      nome,
      status,
    });

    return response.json(convenio);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;

    const updateConvenio = new UpdateConvenioService();

    const convenio = await updateConvenio.execute({
      idConvenio: Number(request.params.idConvenio),
      nome,
      status,
    });

    return response.json(convenio);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteConvenio = new DeleteConvenioService();

    await deleteConvenio.execute({ idConvenio: Number(request.params.idConvenio) });

    return response.json([]);
  }
}
