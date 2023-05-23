import { Request, Response } from 'express';
import CreateProntuarioHabitoVidaService from '../services/CreateProntuarioHabitoVidaService';
import DeleteProntuarioHabitoVidaService from '../services/DeleteProntuarioHabitoVidaService';
import ListProntuarioHabitoVidaService from '../services/ListProntuarioHabitoVidaService';
import ShowProntuarioHabitoVidaService from '../services/ShowProntuarioHabitoVidaService';
import UpdateProntuarioHabitoVidaService from '../services/UpdateProntuarioHabitoVidaService';

export default class ProntuarioHabitoVidaController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProntuarioHabitoVida = new ListProntuarioHabitoVidaService();

    const prontuariosHabitoVida = await listProntuarioHabitoVida.execute();

    return response.json(prontuariosHabitoVida);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const showProntuarioHabitoVida = new ShowProntuarioHabitoVidaService();

    const prontuarioHabitoVida = await showProntuarioHabitoVida.execute({ idHabitoVida: Number(request.params.idHabitoVida) });

    return response.json(prontuarioHabitoVida);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idProntuario, dataRegistro, descricao, status } = request.body;

    const createProntuarioHabitoVida = new CreateProntuarioHabitoVidaService();

    const prontuarioHabitoVida = await createProntuarioHabitoVida.execute({
      idProntuario,
      dataRegistro,
      descricao,
      status,
    });

    return response.json(prontuarioHabitoVida);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { idHabitoVida } = request.params;
    const { dataRegistro, descricao, status } = request.body;

    const updateProntuarioHabitoVida = new UpdateProntuarioHabitoVidaService();

    const prontuarioHabitoVida = await updateProntuarioHabitoVida.execute({
      idHabitoVida: Number(idHabitoVida),
      dataRegistro,
      descricao,
      status,
    });

    return response.json(prontuarioHabitoVida);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const deleteProntuarioHabitoVida = new DeleteProntuarioHabitoVidaService();

    await deleteProntuarioHabitoVida.execute({ idHabitoVida: Number(request.params.idHabitoVida) });

    return response.json([]);
  }
}
