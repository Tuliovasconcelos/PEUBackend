import { Request, Response } from 'express';
import CreateSolicitacaoItemService from '../services/CreateSolicitacaoItemService';
import DeleteSolicitacaoItemService from '../services/DeleteSolicitacaoItemService';
import ListSolicitacaoItemService from '../services/ListSolicitacaoItemService';
import ShowSolicitacaoItemService from '../services/ShowSolicitacaoItemService';
import UpdateSolicitacaoItemService from '../services/UpdateSolicitacaoItemService';

export default class SolicitacaoItemController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listSolicitacaoItem = new ListSolicitacaoItemService();

    const solicitacaoItems = await listSolicitacaoItem.execute();

    return response.json(solicitacaoItems);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showSolicitacaoItem = new ShowSolicitacaoItemService();

    const solicitacaoItem = await showSolicitacaoItem.execute({ idSolicitacaoItem: Number(request.params.idSolicitacaoItem) });

    return response.json(solicitacaoItem);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idSolicitacao, descricao, status } = request.body;

    const createSolicitacaoItem = new CreateSolicitacaoItemService();

    const solicitacaoItem = await createSolicitacaoItem.execute({
      idSolicitacao,
      descricao,
      status,
    });

    return response.json(solicitacaoItem);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { descricao, status } = request.body;

    const updateSolicitacaoItem = new UpdateSolicitacaoItemService();

    const solicitacaoItem = await updateSolicitacaoItem.execute({
      idSolicitacaoItem: Number(request.params.idSolicitacaoItem),
      descricao,
      status,
    });

    return response.json(solicitacaoItem);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteSolicitacaoItem = new DeleteSolicitacaoItemService();

    await deleteSolicitacaoItem.execute({ idSolicitacaoItem: Number(request.params.idSolicitacaoItem) });

    return response.json([]);
  }
}
