import { Request, Response } from 'express';
import CreateEnderecoPacienteService from '../services/CreateEnderecoPacienteService';
import DeleteEnderecoPacienteService from '../services/DeleteEnderecoPacienteService';
import ListEnderecoPacienteService from '../services/ListEnderecoPacienteService';
import ShowEnderecoPacienteService from '../services/ShowEnderecoPacienteService';
import UpdateEnderecoPacienteService from '../services/UpdateEnderecoPacienteService';

export default class EnderecoPacienteController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listEnderecoPaciente = new ListEnderecoPacienteService();

    const enderecos = await listEnderecoPaciente.execute();

    return response.json(enderecos);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showEnderecoPaciente = new ShowEnderecoPacienteService();

    const endereco = await showEnderecoPaciente.execute({ id: Number(request.params.id) });

    return response.json(endereco);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idPaciente, endereco, cidade, estado, cep } = request.body;

    const createEnderecoPaciente = new CreateEnderecoPacienteService();

    const enderecoPaciente = await createEnderecoPaciente.execute({
      idPaciente,
      endereco,
      cidade,
      estado,
      cep,
    });

    return response.json(enderecoPaciente);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { idPaciente, endereco, cidade, estado, cep } = request.body;

    const updateEnderecoPaciente = new UpdateEnderecoPacienteService();

    const enderecoPaciente = await updateEnderecoPaciente.execute({
      id: Number(request.params.id),
      idPaciente,
      endereco,
      cidade,
      estado,
      cep,
    });

    return response.json(enderecoPaciente);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteEnderecoPaciente = new DeleteEnderecoPacienteService();

    await deleteEnderecoPaciente.execute({ id: Number(request.params.id) });

    return response.json([]);
  }
}
