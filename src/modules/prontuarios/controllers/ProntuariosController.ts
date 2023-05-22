import { Request, Response } from 'express';
import CreateProntuarioService from '../services/CreateProntuarioService';
import DeleteProntuarioService from '../services/DeleteProntuarioService';
import ListProntuarioService from '../services/ListProntuarioService';
import ShowProntuarioService from '../services/ShowProntuarioService';
import UpdateProntuarioService from '../services/UpdateProntuarioService';

export default class ProntuarioController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProntuario = new ListProntuarioService();

    const prontuarios = await listProntuario.execute();

    return response.json(prontuarios);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const showProntuario = new ShowProntuarioService();

    const prontuario = await showProntuario.execute({ idProntuario: Number(request.params.idProntuario) });

    return response.json(prontuario);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idPaciente, status } = request.body;

    const createProntuario = new CreateProntuarioService();

    const prontuario = await createProntuario.execute({
      idPaciente
    });

    return response.json(prontuario);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { idPaciente, status } = request.body;

    const updateProntuario = new UpdateProntuarioService();

    const prontuario = await updateProntuario.execute({
      idProntuario: Number(request.params.idProntuario),
      idPaciente
    });

    return response.json(prontuario);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const deleteProntuario = new DeleteProntuarioService();

    await deleteProntuario.execute({ idProntuario: Number(request.params.idProntuario) });

    return response.json([]);
  }
}
