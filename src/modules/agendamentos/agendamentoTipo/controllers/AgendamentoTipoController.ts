import { Request, Response } from 'express';
import CreateAgendamentoTipoService from '../services/CreateAgendamentoTipoService';
import DeleteAgendamentoTipoService from '../services/DeleteAgendamentoTipoService';
import ListAgendamentoTipoService from '../services/ListAgendamentoTipoService';
import ShowAgendamentoTipoService from '../services/ShowAgendamentoTipoService';
import UpdateAgendamentoTipoService from '../services/UpdateAgendamentoTipoService';

export default class AgendamentoTipoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAgendamentoTipo = new ListAgendamentoTipoService();

    const agendamentoTipos = await listAgendamentoTipo.execute();

    return response.json(agendamentoTipos);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const showAgendamentoTipo = new ShowAgendamentoTipoService();

    const agendamentoTipo = await showAgendamentoTipo.execute({ idAgendamentoTipo: Number(request.params.idAgendamentoTipo) });

    return response.json(agendamentoTipo);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;

    const createAgendamentoTipo = new CreateAgendamentoTipoService();

    const agendamentoTipo = await createAgendamentoTipo.execute({
      nome,
      status,
    });

    return response.json(agendamentoTipo);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;

    const updateAgendamentoTipo = new UpdateAgendamentoTipoService();

    const agendamentoTipo = await updateAgendamentoTipo.execute({
      idAgendamentoTipo: Number(request.params.idAgendamentoTipo),
      nome,
      status,
    });

    return response.json(agendamentoTipo);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const deleteAgendamentoTipo = new DeleteAgendamentoTipoService();

    await deleteAgendamentoTipo.execute({ idAgendamentoTipo: Number(request.params.idAgendamentoTipo) });

    return response.json([]);
  }
}
