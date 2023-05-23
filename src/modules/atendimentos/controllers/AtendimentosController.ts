import { Request, Response } from 'express';
import CreateAtendimentoService from '../services/CreateAtendimentoService';
import DeleteAtendimentoService from '../services/DeleteAtendimentoService';
import ListAtendimentoService from '../services/ListAtendimentoService';
import ShowAtendimentoService from '../services/ShowAtendimentoService';
import UpdateAtendimentoService from '../services/UpdateAtendimentoService';

export default class AtendimentosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAtendimentos = new ListAtendimentoService();

    const atendimentos = await listAtendimentos.execute();

    return response.json(atendimentos);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const showAtendimento = new ShowAtendimentoService();

    const atendimento = await showAtendimento.execute({ idAtendimento: Number(request.params.idAtendimento) });

    return response.json(atendimento);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      idPaciente,
      idMedico,
      idProntuario,
      idClinica,
      idTipoAgendamento,
      idPrograma,
      dataAtendimento,
      horaAtendimento,
      conclusao,
      status,
    } = request.body;

    const createAtendimento = new CreateAtendimentoService();

    const atendimento = await createAtendimento.execute({
      idPaciente,
      idMedico,
      idProntuario,
      idClinica,
      idTipoAgendamento,
      idPrograma,
      dataAtendimento,
      horaAtendimento,
      conclusao,
      status,
    });

    return response.json(atendimento);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      idPaciente,
      idMedico,
      idProntuario,
      idClinica,
      idTipoAgendamento,
      idPrograma,
      dataAtendimento,
      horaAtendimento,
      conclusao,
      status,
    } = request.body;

    const updateAtendimento = new UpdateAtendimentoService();

    const atendimento = await updateAtendimento.execute({
      idAtendimento: Number(request.params.idAtendimento),
      idPaciente,
      idMedico,
      idProntuario,
      idClinica,
      idTipoAgendamento,
      idPrograma,
      dataAtendimento,
      horaAtendimento,
      conclusao,
      status,
    });

    return response.json(atendimento);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const deleteAtendimento = new DeleteAtendimentoService();

    await deleteAtendimento.execute({ idAtendimento: Number(request.params.idAtendimento) });

    return response.json([]);
  }
}
