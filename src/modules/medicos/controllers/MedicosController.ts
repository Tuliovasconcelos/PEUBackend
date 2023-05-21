import { Request, Response } from 'express';
import CreateMedicoService from '../services/CreateMedicoService';
import DeleteMedicoService from '../services/DeleteMedicoService';
import ListMedicoService from '../services/ListMedicoService';
import ShowMedicoService from '../services/ShowMedicoService';
import UpdateMedicoService from '../services/UpdateMedicoService';

export default class MedicosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listMedicos = new ListMedicoService();

    const medicos = await listMedicos.execute();

    return response.json(medicos);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showMedico = new ShowMedicoService();

    const medico = await showMedico.execute({ id });

    return response.json(medico);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, crm, especialidade_id } = request.body;

    const createMedico = new CreateMedicoService();

    const medico = await createMedico.execute({
      nome,
      crm,
      especialidade_id,
    });

    return response.json(medico);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, crm, especialidade_id } = request.body;
    const { id } = request.params;

    const updateMedico = new UpdateMedicoService();

    const medico = await updateMedico.execute({
      id,
      nome,
      crm,
      especialidade_id,
    });

    return response.json(medico);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteMedico = new DeleteMedicoService();

    await deleteMedico.execute({ id });

    return response.json([]);
  }
}
