import { Request, Response } from 'express';
import CreateTipoAgendamentoService from '../services/CreateTipoAgendamentoService';
import DeleteTipoAgendamentoService from '../services/DeleteTipoAgendamentoService';
import ListTipoAgendamentoService from '../services/ListTipoAgendamentoService';
import ShowTipoAgendamentoService from '../services/ShowTipoAgendamentoService';
import UpdateTipoAgendamentoService from '../services/UpdateTipoAgendamentoService';

export default class TipoAgendamentoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listTipoAgendamento = new ListTipoAgendamentoService();

    const tipoAgendamentos = await listTipoAgendamento.execute();

    return response.json(tipoAgendamentos);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showTipoAgendamento = new ShowTipoAgendamentoService();

    const tipoAgendamento = await showTipoAgendamento.execute({ idTipoAgendamento: Number(request.params.idTipoAgendamento) });

    return response.json(tipoAgendamento);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;

    const createTipoAgendamento = new CreateTipoAgendamentoService();

    const tipoAgendamento = await createTipoAgendamento.execute({
      nome,
      status,
    });

    return response.json(tipoAgendamento);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;

    const updateTipoAgendamento = new UpdateTipoAgendamentoService();

    const tipoAgendamento = await updateTipoAgendamento.execute({
      idTipoAgendamento: Number(request.params.idTipoAgendamento),
      nome,
      status,
    });

    return response.json(tipoAgendamento);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteTipoAgendamento = new DeleteTipoAgendamentoService();

    await deleteTipoAgendamento.execute({ idTipoAgendamento: Number(request.params.idTipoAgendamento) });

    return response.json([]);
  }
}
