import { Request, Response } from 'express';
import CreatePacienteEnderecoService from '../services/CreatePacienteEnderecoService';
import DeletePacienteEnderecoService from '../services/DeletePacienteEnderecoService';
import ListPacienteEnderecoService from '../services/ListPacienteEnderecoService';
import ShowPacienteEnderecoService from '../services/ShowPacienteEnderecoService';
import UpdatePacienteEnderecoService from '../services/UpdatePacienteEnderecoService';

export default class PacienteEnderecoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPacienteEndereco = new ListPacienteEnderecoService();

    const enderecos = await listPacienteEndereco.execute();

    return response.json(enderecos);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showPacienteEndereco = new ShowPacienteEnderecoService();

    const endereco = await showPacienteEndereco.execute({ idEndereco: Number(request.params.id) });

    return response.json(endereco);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idPaciente, endereco, cidade, estado, cep } = request.body;

    const createPacienteEndereco = new CreatePacienteEnderecoService();

    const PacienteEndereco = await createPacienteEndereco.execute({
      idPaciente,
      endereco,
      cidade,
      estado,
      cep,
    });

    return response.json(PacienteEndereco);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { idPaciente, endereco, cidade, estado, cep } = request.body;

    const updatePacienteEndereco = new UpdatePacienteEnderecoService();

    const PacienteEndereco = await updatePacienteEndereco.execute({
      idEndereco: Number(request.params.id),
      idPaciente,
      endereco,
      cidade,
      estado,
      cep,
    });

    return response.json(PacienteEndereco);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePacienteEndereco = new DeletePacienteEnderecoService();

    await deletePacienteEndereco.execute({ id: Number(request.params.id) });

    return response.json([]);
  }
}
