import { Request, Response } from 'express';
import CreateClinicaService from '../services/CreateClinicaService';
import DeleteClinicaService from '../services/DeleteClinicaService';
import ListClinicaService from '../services/ListClinicaService';
import ShowClinicaService from '../services/ShowClinicaService';
import UpdateClinicaService from '../services/UpdateClinicaService';

export default class ClinicasController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listClinica = new ListClinicaService();

    const clinicas = await listClinica.execute();

    return response.json(clinicas);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showClinica = new ShowClinicaService();

    const clinica = await showClinica.execute({ idClinica: Number(id) });

    return response.json(clinica);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, endereco, telefone, status } = request.body;

    const createClinica = new CreateClinicaService();

    const clinica = await createClinica.execute({
      nome,
      endereco,
      telefone,
      status,
    });

    return response.json(clinica);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { nome, endereco, telefone, status } = request.body;

    const updateClinica = new UpdateClinicaService();

    const clinica = await updateClinica.execute({
      idClinica: Number(id),
      nome,
      endereco,
      telefone,
      status,
    });

    return response.json(clinica);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteClinica = new DeleteClinicaService();

    await deleteClinica.execute({ idClinica: Number(id) });

    return response.json([]);
  }
}
