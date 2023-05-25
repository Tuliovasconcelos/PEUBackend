import { Request, Response } from 'express';
import CreateAgendamentoService from '../services/CreateAgendamentoService';
import DeleteAgendamentoService from '../services/DeleteAgendamentoService';
import ListAgendamentoService from '../services/ListAgendamentoService';
import ShowAgendamentoService from '../services/ShowAgendamentoService';
import UpdateAgendamentoService from '../services/UpdateAgendamentoService';

export default class AgendamentosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAgendamento = new ListAgendamentoService();

    const agendamentos = await listAgendamento.execute();

    return response.json(agendamentos);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { idAgendamento } = request.params;

    const showAgendamento = new ShowAgendamentoService();

    const agendamento = await showAgendamento.execute({ idAgendamento: Number(idAgendamento) });

    return response.json(agendamento);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      idPaciente,
      idMedico,
      idClinica,
      idAgendamentoTipo,
      dataAgendamento,
      horaAgendamento,
      status,
    } = request.body;

    const createAgendamento = new CreateAgendamentoService();

    const agendamento = await createAgendamento.execute({
      idPaciente,
      idMedico,
      idClinica,
      idAgendamentoTipo,
      dataAgendamento,
      horaAgendamento,
      status,
    });

    return response.json(agendamento);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { idAgendamento } = request.params;
    const {
      idPaciente,
      idMedico,
      idClinica,
      idAgendamentoTipo,
      dataAgendamento,
      horaAgendamento,
      status,
    } = request.body;

    const updateAgendamento = new UpdateAgendamentoService();

    const agendamento = await updateAgendamento.execute({
      idAgendamento: Number(idAgendamento),
      idPaciente,
      idMedico,
      idClinica,
      idAgendamentoTipo,
      dataAgendamento,
      horaAgendamento,
      status,
    });

    return response.json(agendamento);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { idAgendamento } = request.params;

    const deleteAgendamento = new DeleteAgendamentoService();

    await deleteAgendamento.execute({ idAgendamento: Number(idAgendamento) });

    return response.json([]);
  }
}
