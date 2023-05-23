import { Request, Response } from 'express';
import CreateProntuarioQueixaSaudeService from '../services/CreateProntuarioQueixaSaudeService';
import DeleteProntuarioQueixaSaudeService from '../services/DeleteProntuarioQueixaSaudeService';
import ListProntuarioQueixaSaudeService from '../services/ListProntuarioQueixaSaudeService';
import ShowProntuarioQueixaSaudeService from '../services/ShowProntuarioQueixaSaudeService';
import UpdateProntuarioQueixaSaudeService from '../services/UpdateProntuarioQueixaSaudeService';

export default class ProntuarioQueixaSaudeController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProntuarioQueixaSaude = new ListProntuarioQueixaSaudeService();

    const prontuariosQueixaSaude = await listProntuarioQueixaSaude.execute();

    return response.json(prontuariosQueixaSaude);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const showProntuarioQueixaSaude = new ShowProntuarioQueixaSaudeService();

    const prontuarioQueixaSaude = await showProntuarioQueixaSaude.execute({ idQueixaSaude: Number(request.params.idQueixaSaude) });

    return response.json(prontuarioQueixaSaude);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idProntuario, dataRegistro, descricao, status } = request.body;

    const createProntuarioQueixaSaude = new CreateProntuarioQueixaSaudeService();

    const prontuarioQueixaSaude = await createProntuarioQueixaSaude.execute({
      idProntuario,
      dataRegistro,
      descricao,
      status,
    });

    return response.json(prontuarioQueixaSaude);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { idQueixaSaude } = request.params;
    const { dataRegistro, descricao, status } = request.body;

    const updateProntuarioQueixaSaude = new UpdateProntuarioQueixaSaudeService();

    const prontuarioQueixaSaude = await updateProntuarioQueixaSaude.execute({
      idQueixaSaude: Number(idQueixaSaude),
      dataRegistro,
      descricao,
      status,
    });

    return response.json(prontuarioQueixaSaude);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const deleteProntuarioQueixaSaude = new DeleteProntuarioQueixaSaudeService();

    await deleteProntuarioQueixaSaude.execute({ idQueixaSaude: Number(request.params.idQueixaSaude) });

    return response.json([]);
  }
}
