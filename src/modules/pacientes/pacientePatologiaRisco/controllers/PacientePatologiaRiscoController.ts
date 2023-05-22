import { Request, Response } from 'express';
import CreatePacientePatologiaRiscoService from '../services/CreatePacientePatologiaRiscoService';
import DeletePacientePatologiaRiscoService from '../services/DeletePacientePatologiaRiscoService';
import ListPacientePatologiaRiscoService from '../services/ListPacientePatologiaRiscoService';
import ShowPacientePatologiaRiscoService from '../services/ShowPacientePatologiaRiscoService';
import UpdatePacientePatologiaRiscoService from '../services/UpdatePacientePatologiaRiscoService';

export default class PacientePatologiaRiscoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPacientePatologiaRisco = new ListPacientePatologiaRiscoService();

    const pacientePatologiaRisco = await listPacientePatologiaRisco.execute();

    return response.json(pacientePatologiaRisco);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showPacientePatologiaRisco = new ShowPacientePatologiaRiscoService();

    const pacientePatologiaRisco = await showPacientePatologiaRisco.execute({
      idPaciente: Number(request.params.idPaciente),
      idPatologia: Number(request.params.idPatologia),
      idRisco: Number(request.params.idRisco),
    });

    return response.json(pacientePatologiaRisco);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idPaciente, idPatologia, idRisco } = request.body;

    const createPacientePatologiaRisco = new CreatePacientePatologiaRiscoService();

    const pacientePatologiaRisco = await createPacientePatologiaRisco.execute({
      idPaciente,
      idPatologia,
      idRisco,
    });

    return response.json(pacientePatologiaRisco);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { idPaciente, idPatologia, idRisco } = request.body;

    const updatePacientePatologiaRisco = new UpdatePacientePatologiaRiscoService();

    const pacientePatologiaRisco = await updatePacientePatologiaRisco.execute({
      idPaciente: Number(request.params.idPaciente),
      idPatologia: Number(request.params.idPatologia),
      idRisco: Number(request.params.idRisco)
    });

    return response.json(pacientePatologiaRisco);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deletePacientePatologiaRisco = new DeletePacientePatologiaRiscoService();

    await deletePacientePatologiaRisco.execute({
      idPaciente: Number(request.params.idPaciente),
      idPatologia: Number(request.params.idPatologia),
      idRisco: Number(request.params.idRisco),
    });

    return response.json([]);
  }
}
