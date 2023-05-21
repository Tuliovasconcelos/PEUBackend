import { Request, Response } from 'express';
import CreateMedicoEspecialidadeService from '../services/CreateMedicoEspecialidadeService';
import DeleteMedicoEspecialidadeService from '../services/DeleteMedicoEspecialidadeService';
import ListMedicoEspecialidadeService from '../services/ListMedicoEspecialidadeService';
import ShowMedicoEspecialidadeService from '../services/ShowMedicoEspecialidadeService';
import UpdateMedicoEspecialidadeService from '../services/UpdateMedicoEspecialidadeService';

export default class MedicoEspecialidadeController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listMedicoEspecialidade = new ListMedicoEspecialidadeService();

    const medicosEspecialidades = await listMedicoEspecialidade.execute();

    return response.json(medicosEspecialidades);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showMedicoEspecialidade = new ShowMedicoEspecialidadeService();

    const medicoEspecialidade = await showMedicoEspecialidade.execute({ id });

    return response.json(medicoEspecialidade);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { medicoId, especialidadeId } = request.body;

    const createMedicoEspecialidade = new CreateMedicoEspecialidadeService();

    const medicoEspecialidade = await createMedicoEspecialidade.execute({
      medicoId,
      especialidadeId,
    });

    return response.json(medicoEspecialidade);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { medicoId, especialidadeId } = request.body;
    const { id } = request.params;

    const updateMedicoEspecialidade = new UpdateMedicoEspecialidadeService();

    const medicoEspecialidade = await updateMedicoEspecialidade.execute({
      id,
      medicoId,
      especialidadeId,
    });

    return response.json(medicoEspecialidade);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteMedicoEspecialidade = new DeleteMedicoEspecialidadeService();

    await deleteMedicoEspecialidade.execute({ id });

    return response.json([]);
  }
}
