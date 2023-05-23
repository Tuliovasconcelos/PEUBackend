import { Request, Response } from 'express';
import CreateProgramaService from '../services/CreateProgramaService';
import DeleteProgramaService from '../services/DeleteProgramaService';
import ListProgramaService from '../services/ListProgramaService';
import ShowProgramaService from '../services/ShowProgramaService';
import UpdateProgramaService from '../services/UpdateProgramaService';

export default class ProgramasController {
  public async index(request: Request, response: Response): Promise<Response> {

    const listPrograma = new ListProgramaService();

    const programas = await listPrograma.execute();

    return response.json(programas);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { idPrograma } = request.params;

    const showPrograma = new ShowProgramaService();

    const programa = await showPrograma.execute({ idPrograma: Number(idPrograma) });

    return response.json(programa);
  }

  public async create(request: Request, response: Response): Promise<Response> {

    const { descricao, status } = request.body;

    const createPrograma = new CreateProgramaService();

    const programa = await createPrograma.execute({ descricao, status });

    return response.json(programa);
  }

  public async update(request: Request, response: Response): Promise<Response> {

    const { idPrograma } = request.params;

    const { descricao, status } = request.body;

    const updatePrograma = new UpdateProgramaService();

    const programa = await updatePrograma.execute({ idPrograma: Number(idPrograma), descricao, status });

    return response.json(programa);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const { idPrograma } = request.params;

    const deletePrograma = new DeleteProgramaService();

    await deletePrograma.execute({ idPrograma: Number(idPrograma) });

    return response.json([]);
  }
}
