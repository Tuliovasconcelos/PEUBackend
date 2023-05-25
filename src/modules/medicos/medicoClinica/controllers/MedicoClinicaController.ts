import { Request, Response } from 'express';
import CreateMedicoClinicaService from '../services/CreateMedicoClinicaService';
import DeleteMedicoClinicaService from '../services/DeleteMedicoClinicaService';
import ListMedicoClinicaService from '../services/ListMedicoClinicaService';
import ShowMedicoClinicaService from '../services/ShowMedicoClinicaService';
import UpdateMedicoClinicaService from '../services/UpdateMedicoClinicaService';

export default class MedicoClinicaController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listMedicoClinicas = new ListMedicoClinicaService();

    const medicoClinicas = await listMedicoClinicas.execute();

    return response.json(medicoClinicas);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showMedicoClinica = new ShowMedicoClinicaService();

    const medicoClinica = await showMedicoClinica.execute({ idMedicoClinica: Number(request.params.idMedicoClinica) });

    return response.json(medicoClinica);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idMedico, idClinica, status } = request.body;
    const createMedicoClinica = new CreateMedicoClinicaService();

    const medicoClinica = await createMedicoClinica.execute({
      idMedico,
      idClinica,
      status,
    });

    return response.json(medicoClinica);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { status } = request.body;
    const updateMedicoClinica = new UpdateMedicoClinicaService();

    const medicoClinica = await updateMedicoClinica.execute({
      idMedicoClinica: Number(request.params.idMedicoClinica),
      status,
    });

    return response.json(medicoClinica);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteMedicoClinica = new DeleteMedicoClinicaService();

    await deleteMedicoClinica.execute({ idMedicoClinica: Number(request.params.idMedicoClinica) });

    return response.json([]);
  }
}
