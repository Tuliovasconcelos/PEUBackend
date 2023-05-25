import { Request, Response } from 'express';
import CreateAtendimentoProcedimentoService from '../services/CreateAtendimentoProcedimentoService';
import DeleteAtendimentoProcedimentoService from '../services/DeleteAtendimentoProcedimentoService';
import ListAtendimentoProcedimentoService from '../services/ListAtendimentoProcedimentoService';
import ShowAtendimentoProcedimentoService from '../services/ShowAtendimentoProcedimentoService';
import UpdateAtendimentoProcedimentoService from '../services/UpdateAtendimentoProcedimentoService';

export default class AtendimentoProcedimentosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAtendimentoProcedimentos = new ListAtendimentoProcedimentoService();

    const atendimentoProcedimentos = await listAtendimentoProcedimentos.execute();

    return response.json(atendimentoProcedimentos);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const showAtendimentoProcedimento = new ShowAtendimentoProcedimentoService();

    const atendimentoProcedimento = await showAtendimentoProcedimento.execute({ idAtendimentoProcedimento: Number(request.params.idAtendimentoProcedimento) });

    return response.json(atendimentoProcedimento);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      idAtendimento,
      idProcedimento,
      status,
    } = request.body;

    const createAtendimentoProcedimento = new CreateAtendimentoProcedimentoService();

    const atendimentoProcedimento = await createAtendimentoProcedimento.execute({
      idAtendimento,
      idProcedimento,
      status,
    });

    return response.json(atendimentoProcedimento);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      idAtendimento,
      idProcedimento,
      status,
    } = request.body;

    const updateAtendimentoProcedimento = new UpdateAtendimentoProcedimentoService();

    const atendimentoProcedimento = await updateAtendimentoProcedimento.execute({
      idAtendimentoProcedimento: Number(request.params.idAtendimentoProcedimento),
      idAtendimento,
      idProcedimento,
      status,
    });

    return response.json(atendimentoProcedimento);
  }


  public async delete(request: Request, response: Response): Promise<Response> {

    const deleteAtendimentoProcedimento = new DeleteAtendimentoProcedimentoService();

    await deleteAtendimentoProcedimento.execute({ idAtendimentoProcedimento: Number(request.params.idAtendimentoProcedimento) });

    return response.json([]);
  }
}
