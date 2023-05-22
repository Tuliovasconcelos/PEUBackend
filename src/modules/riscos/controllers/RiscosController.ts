import { Request, Response } from 'express';
import CreateRiscoService from '../services/CreateRiscoService';
import DeleteRiscoService from '../services/DeleteRiscoService';
import ListRiscoService from '../services/ListRiscoService';
import ShowRiscoService from '../services/ShowRiscoService';
import UpdateRiscoService from '../services/UpdateRiscoService';

export default class RiscosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listRiscos = new ListRiscoService();

    const riscos = await listRiscos.execute();

    return response.json(riscos);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showRisco = new ShowRiscoService();

    const risco = await showRisco.execute({ idRisco: Number(request.params.idRisco) });

    return response.json(risco);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { descricao, status } = request.body;

    const createRisco = new CreateRiscoService();

    const risco = await createRisco.execute({
      descricao,
      status,
    });

    return response.json(risco);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { descricao, status } = request.body;

    const updateRisco = new UpdateRiscoService();

    const risco = await updateRisco.execute({
      idRisco: Number(request.params.idRisco),
      descricao,
      status,
    });

    return response.json(risco);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const deleteRisco = new DeleteRiscoService();

    await deleteRisco.execute({ idRisco: Number(request.params.idRisco) });

    return response.json([]);
  }
}
