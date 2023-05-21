import { Request, Response } from 'express';
import CreateContatoPacienteService from '../services/CreateContatoPacienteService';
import DeleteContatoPacienteService from '../services/DeleteContatoPacienteService';
import ListContatoPacienteService from '../services/ListContatoPacienteService';
import ShowContatoPacienteService from '../services/ShowContatoPacienteService';
import UpdateContatoPacienteService from '../services/UpdateContatoPacienteService';

export default class ContatoPacienteController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listContatoPaciente = new ListContatoPacienteService();

    const contatosPaciente = await listContatoPaciente.execute();

    return response.json(contatosPaciente);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showContatoPaciente = new ShowContatoPacienteService();

    const contatoPaciente = await showContatoPaciente.execute({ id });

    return response.json(contatoPaciente);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { tipoContato, valorContato } = request.body;

    const createContatoPaciente = new CreateContatoPacienteService();

    const contatoPaciente = await createContatoPaciente.execute({
      tipoContato,
      valorContato,
    });

    return response.json(contatoPaciente);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { tipoContato, valorContato } = request.body;
    const { id } = request.params;

    const updateContatoPaciente = new UpdateContatoPacienteService();

    const contatoPaciente = await updateContatoPaciente.execute({
      id,
      tipoContato,
      valorContato,
    });

    return response.json(contatoPaciente);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteContatoPaciente = new DeleteContatoPacienteService();

    await deleteContatoPaciente.execute({ id });

    return response.json([]);
  }
}
