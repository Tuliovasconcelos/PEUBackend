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
    const showMedico = new ShowMedicoService();

    const medico = await showMedico.execute({ id: Number(request.params.id) });

    return response.json(medico);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idUsuario, nome, crm } = request.body;
    const createMedico = new CreateMedicoService();

    const medico = await createMedico.execute({
      idUsuario,
      nome,
      crm,
    });

    return response.json(medico);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, crm } = request.body;
    const updateMedico = new UpdateMedicoService();

    const medico = await updateMedico.execute({
      id: Number(request.params.id),
      nome,
      crm
    });

    return response.json(medico);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteMedico = new DeleteMedicoService();

    await deleteMedico.execute({ id: Number(request.params.id) });

    return response.json([]);
  }
}
