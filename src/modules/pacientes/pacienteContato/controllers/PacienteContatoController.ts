import { Request, Response } from 'express';
import CreatePacienteContatoService from '../services/CreatePacienteContatoService';
import DeletePacienteContatoService from '../services/DeletePacienteContatoService';
import ListPacienteContatoService from '../services/ListPacienteContatoService';
import ShowPacienteContatoService from '../services/ShowPacienteContatoService';
import UpdatePacienteContatoService from '../services/UpdatePacienteContatoService';

export default class PacienteContatoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPacienteContato = new ListPacienteContatoService();

    const contatosPaciente = await listPacienteContato.execute();

    return response.json(contatosPaciente);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showPacienteContato = new ShowPacienteContatoService();

    const PacienteContato = await showPacienteContato.execute({ id: Number(id) });

    return response.json(PacienteContato);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idPaciente, tipoContato, valorContato } = request.body;

    const createPacienteContato = new CreatePacienteContatoService();

    const PacienteContato = await createPacienteContato.execute({
      idPaciente,
      tipoContato,
      valorContato,
    });

    return response.json(PacienteContato);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { tipoContato, valorContato } = request.body;
    const { id } = request.params;

    const updatePacienteContato = new UpdatePacienteContatoService();

    const PacienteContato = await updatePacienteContato.execute({
      id: Number(id),
      tipoContato,
      valorContato,
    });

    return response.json(PacienteContato);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePacienteContato = new DeletePacienteContatoService();

    await deletePacienteContato.execute({ id: Number(id) });

    return response.json([]);
  }
}
