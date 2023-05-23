import { Request, Response } from 'express';
import CreateProcedimentoService from '../services/CreateProcedimentoService';
import DeleteProcedimentoService from '../services/DeleteProcedimentoService';
import ListProcedimentoService from '../services/ListProcedimentoService';
import ShowProcedimentoService from '../services/ShowProcedimentoService';
import UpdateProcedimentoService from '../services/UpdateProcedimentoService';

export default class ProcedimentosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProcedimento = new ListProcedimentoService();

    const procedimentos = await listProcedimento.execute();

    return response.json(procedimentos);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const showProcedimento = new ShowProcedimentoService();

    const procedimento = await showProcedimento.execute({ idProcedimento: Number(request.params.idProcedimento) });

    return response.json(procedimento);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;

    const createProcedimento = new CreateProcedimentoService();

    const procedimento = await createProcedimento.execute({ nome, status });

    return response.json(procedimento);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;

    const updateProcedimento = new UpdateProcedimentoService();

    const procedimento = await updateProcedimento.execute({
      idProcedimento: Number(request.params.idProcedimento),
      nome,
      status,
    });

    return response.json(procedimento);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const deleteProcedimento = new DeleteProcedimentoService();

    await deleteProcedimento.execute(({ idProcedimento: Number(request.params.idProcedimento) }));

    return response.json([]);
  }
}
