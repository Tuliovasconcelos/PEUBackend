import { Request, Response } from 'express';
import CreateSolicitacaoService from '../services/CreateSolicitacaoService';
import DeleteSolicitacaoService from '../services/DeleteSolicitacaoService';
import ListSolicitacaoService from '../services/ListSolicitacaoService';
import ShowSolicitacaoService from '../services/ShowSolicitacaoService';
import UpdateSolicitacaoService from '../services/UpdateSolicitacaoService';

export default class SolicitacoesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listSolicitacao = new ListSolicitacaoService();

    const solicitacoes = await listSolicitacao.execute();

    return response.json(solicitacoes);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showSolicitacao = new ShowSolicitacaoService();

    const solicitacao = await showSolicitacao.execute({ idSolicitacao: Number(request.params.idSolicitacao) });

    return response.json(solicitacao);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idPaciente, idMedico, idClinica, dataSolicitacao, status } = request.body;

    const createSolicitacao = new CreateSolicitacaoService();

    const solicitacao = await createSolicitacao.execute({
      idPaciente,
      idMedico,
      idClinica,
      dataSolicitacao,
      status,
    });

    return response.json(solicitacao);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { idPaciente, idMedico, idClinica, dataSolicitacao, status } = request.body;

    const updateSolicitacao = new UpdateSolicitacaoService();

    const solicitacao = await updateSolicitacao.execute({
      idSolicitacao: Number(request.params.idSolicitacao),
      idPaciente,
      idMedico,
      idClinica,
      dataSolicitacao,
      status,
    });

    return response.json(solicitacao);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const deleteSolicitacao = new DeleteSolicitacaoService();

    await deleteSolicitacao.execute({ idSolicitacao: Number(request.params.idSolicitacao) });

    return response.json([]);
  }
}
