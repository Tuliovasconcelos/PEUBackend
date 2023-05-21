import { Request, Response } from 'express';
import CreatePacienteService from '../services/CreatePacienteService';
import DeletePacienteService from '../services/DeletePacienteService';
import ListPacienteService from '../services/ListPacienteService';
import ShowPacienteService from '../services/ShowPacienteService';
import UpdatePacienteService from '../services/UpdatePacienteService';

export default class PacientesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPacientes = new ListPacienteService();

    const pacientes = await listPacientes.execute();

    return response.json(pacientes);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showPaciente = new ShowPacienteService();

    const paciente = await showPaciente.execute({ id });

    return response.json(paciente);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, dataNascimento, genero } = request.body;

    const createPaciente = new CreatePacienteService();

    const paciente = await createPaciente.execute({
      nome,
      dataNascimento,
      genero,
    });

    return response.json(paciente);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, dataNascimento, genero } = request.body;
    const { id } = request.params;

    const updatePaciente = new UpdatePacienteService();

    const paciente = await updatePaciente.execute({
      id,
      nome,
      dataNascimento,
      genero,
    });

    return response.json(paciente);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePaciente = new DeletePacienteService();

    await deletePaciente.execute({ id });

    return response.json([]);
  }
}
