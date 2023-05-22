import { Request, Response } from 'express';
import CreatePatologiaService from '../services/CreatePatologiaService';
import DeletePatologiaService from '../services/DeletePatologiaService';
import ListPatologiaService from '../services/ListPatologiaService';
import ShowPatologiaService from '../services/ShowPatologiaService';
import UpdatePatologiaService from '../services/UpdatePatologiaService';

export default class PatologiasController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPatologias = new ListPatologiaService();

    const patologias = await listPatologias.execute();

    return response.json(patologias);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const showPatologia = new ShowPatologiaService();

    const patologia = await showPatologia.execute({ idPatologia: Number(request.params.id) });

    return response.json(patologia);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { descricao, status } = request.body;

    const createPatologia = new CreatePatologiaService();

    const patologia = await createPatologia.execute({
      descricao,
      status,
    });

    return response.json(patologia);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { descricao, status } = request.body;

    const updatePatologia = new UpdatePatologiaService();

    const patologia = await updatePatologia.execute({
      idPatologia: Number(request.params.id),
      descricao,
      status,
    });

    return response.json(patologia);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const deletePatologia = new DeletePatologiaService();

    await deletePatologia.execute({ idPatologia: Number(request.params.id) });

    return response.json([]);
  }
}
