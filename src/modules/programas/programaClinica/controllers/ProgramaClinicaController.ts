import { Request, Response } from 'express';
import CreateProgramaClinicaService from '../services/CreateProgramaClinicaService';
import DeleteProgramaClinicaService from '../services/DeleteProgramaClinicaService';
import ListProgramaClinicasService from '../services/ListProgramaClinicasService';
import ShowProgramaClinicaService from '../services/ShowProgramaClinicaService';
import UpdateProgramaClinicaService from '../services/UpdateProgramaClinicaService';

export default class ProgramaClinicasController {
  public async index(request: Request, response: Response): Promise<Response> {

    const listProgramaClinicas = new ListProgramaClinicasService();

    const programaClinicas = await listProgramaClinicas.execute();

    return response.json(programaClinicas);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const showProgramaClinica = new ShowProgramaClinicaService();

    const programaClinica = await showProgramaClinica.execute({ idProgramaClinica: Number(request.params.idProgramaClinica) });

    return response.json(programaClinica);
  }

  public async create(request: Request, response: Response): Promise<Response> {

    const { idPrograma, idClinica, status } = request.body;

    const createProgramaClinica = new CreateProgramaClinicaService();

    const programaClinica = await createProgramaClinica.execute({
      idPrograma,
      idClinica,
      status,
    });
    return response.json(programaClinica);
  }

  public async update(request: Request, response: Response): Promise<Response> {

    const { idPrograma, idClinica, status } = request.body;

    const updateProgramaClinica = new UpdateProgramaClinicaService();

    const programaClinica = await updateProgramaClinica.execute({
      idProgramaClinica: Number(request.params.idProgramaClinica),
      idPrograma,
      idClinica,
      status,
    });
    return response.json(programaClinica);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const deleteProgramaClinica = new DeleteProgramaClinicaService();

    await deleteProgramaClinica.execute({ idProgramaClinica: Number(request.params.idProgramaClinica) });

    return response.json([]);
  }
}
