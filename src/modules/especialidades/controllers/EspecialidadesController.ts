import { Request, Response } from 'express';
import CreateEspecialidadeService from '../services/CreateEspecialidadeService';
import DeleteEspecialidadeService from '../services/DeleteEspecialidadeService';
import ListEspecialidadeService from '../services/ListEspecialidadeService';
import ShowEspecialidadeService from '../services/ShowEspecialidadeService';
import UpdateEspecialidadeService from '../services/UpdateEspecialidadeService';

export default class EspecialidadesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listEspecialidades = new ListEspecialidadeService();

    const especialidades = await listEspecialidades.execute();

    return response.json(especialidades);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showEspecialidade = new ShowEspecialidadeService();

    const especialidade = await showEspecialidade.execute({ id });

    return response.json(especialidade);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;

    const createEspecialidade = new CreateEspecialidadeService();

    const especialidade = await createEspecialidade.execute({
      nome,
      status,
    });

    return response.json(especialidade);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;
    const { id } = request.params;

    const updateEspecialidade = new UpdateEspecialidadeService();

    const especialidade = await updateEspecialidade.execute({
      id,
      nome,
      status,
    });

    return response.json(especialidade);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteEspecialidade = new DeleteEspecialidadeService();

    await deleteEspecialidade.execute({ id });

    return response.json([]);
  }
}
