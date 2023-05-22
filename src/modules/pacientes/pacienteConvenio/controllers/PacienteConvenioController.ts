import { Request, Response } from 'express';
import CreatePacienteConvenioService from '../services/CreatePacienteConvenioService';
import DeletePacienteConvenioService from '../services/DeletePacienteConvenioService';
import ListPacienteConvenioService from '../services/ListPacienteConvenioService';
import ShowPacienteConvenioService from '../services/ShowPacienteConvenioService';
import UpdatePacienteConvenioService from '../services/UpdatePacienteConvenioService';

export default class PacienteConvenioController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPacienteConvenio = new ListPacienteConvenioService();

    const pacientesConvenio = await listPacienteConvenio.execute();

    return response.json(pacientesConvenio);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showPacienteConvenio = new ShowPacienteConvenioService();

    const pacienteConvenio = await showPacienteConvenio.execute({
      idPacienteConvenio: Number(request.params.idPacienteConvenio),
    });

    return response.json(pacienteConvenio);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idPaciente, idConvenio, numeroCarteira } = request.body;

    const createPacienteConvenio = new CreatePacienteConvenioService();

    const pacienteConvenio = await createPacienteConvenio.execute({
      idPaciente,
      idConvenio,
      numeroCarteira,
    });

    return response.json(pacienteConvenio);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { numeroCarteira } = request.body;

    const updatePacienteConvenio = new UpdatePacienteConvenioService();

    const pacienteConvenio = await updatePacienteConvenio.execute({
      idPacienteConvenio: Number(request.params.idPacienteConvenio),
      numeroCarteira,
    });

    return response.json(pacienteConvenio);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deletePacienteConvenio = new DeletePacienteConvenioService();

    await deletePacienteConvenio.execute({
      idPacienteConvenio: Number(request.params.idPacienteConvenio),
    });

    return response.json([]);
  }
}
