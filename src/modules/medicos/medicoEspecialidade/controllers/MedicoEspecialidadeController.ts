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

    const showMedicoEspecialidade = new ShowMedicoEspecialidadeService();

    const medicoEspecialidade = await showMedicoEspecialidade.execute({ idMedicoEspecialidade: Number(request.params.idMedicoEspecialidade) });

    return response.json(medicoEspecialidade);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idMedico, idEspecialidade } = request.body;

    const createMedicoEspecialidade = new CreateMedicoEspecialidadeService();

    const medicoEspecialidade = await createMedicoEspecialidade.execute({
      idMedico,
      idEspecialidade,
    });

    return response.json(medicoEspecialidade);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { idMedico, idEspecialidade } = request.body;

    const updateMedicoEspecialidade = new UpdateMedicoEspecialidadeService();

    const medicoEspecialidade = await updateMedicoEspecialidade.execute({
      idMedicoEspecialidade: Number(request.params.idMedicoEspecialidade),
      idMedico,
      idEspecialidade,
    });

    return response.json(medicoEspecialidade);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const deleteMedicoEspecialidade = new DeleteMedicoEspecialidadeService();

    await deleteMedicoEspecialidade.execute({ idMedicoEspecialidade: Number(request.params.idMedicoEspecialidade) });

    return response.json([]);
  }
}
