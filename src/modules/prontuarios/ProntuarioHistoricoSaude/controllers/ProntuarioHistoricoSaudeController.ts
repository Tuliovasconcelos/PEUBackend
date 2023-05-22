import { Request, Response } from 'express';
import CreateProntuarioHistoricoSaudeService from '../services/CreateProntuarioHistoricoSaudeService';
import DeleteProntuarioHistoricoSaudeService from '../services/DeleteProntuarioHistoricoSaudeService';
import ListProntuarioHistoricoSaudeService from '../services/ListProntuarioHistoricoSaudeService';
import ShowProntuarioHistoricoSaudeService from '../services/ShowProntuarioHistoricoSaudeService';
import UpdateProntuarioHistoricoSaudeService from '../services/UpdateProntuarioHistoricoSaudeService';

export default class ProntuarioHistoricoSaudeController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { idProntuario } = request.params;

    const listHistorico = new ListProntuarioHistoricoSaudeService();

    const historicos = await listHistorico.execute({ idProntuario: Number(idProntuario) });

    return response.json(historicos);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showHistorico = new ShowProntuarioHistoricoSaudeService();

    const historico = await showHistorico.execute({ idProntuarioHistoricoSaude: Number(request.params.idProntuarioHistoricoSaude) });

    return response.json(historico);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idProntuario, dataRegistro, descricao, status } = request.body;

    const createHistorico = new CreateProntuarioHistoricoSaudeService();

    const historico = await createHistorico.execute({
      idProntuario: Number(idProntuario),
      dataRegistro,
      descricao,
      status,
    });

    return response.json(historico);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { idProntuario, dataRegistro, descricao, status } = request.body;

    const updateHistorico = new UpdateProntuarioHistoricoSaudeService();

    const historico = await updateHistorico.execute({
      id: Number(id),
      idProntuario: Number(idProntuario),
      dataRegistro,
      descricao,
      status,
    });

    return response.json(historico);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteHistorico = new DeleteProntuarioHistoricoSaudeService();

    await deleteHistorico.execute({ idProntuarioHistoricoSaude: Number(request.params.idProntuarioHistoricoSaude) });

    return response.json([]);
  }
}
