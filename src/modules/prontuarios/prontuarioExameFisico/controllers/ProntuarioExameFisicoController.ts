import { Request, Response } from 'express';
import CreateProntuarioExameFisicoService from '../services/CreateProntuarioExameFisicoService';
import DeleteProntuarioExameFisicoService from '../services/DeleteProntuarioExameFisicoService';
import ListProntuarioExameFisicoService from '../services/ListProntuarioExameFisicoService';
import ShowProntuarioExameFisicoService from '../services/ShowProntuarioExameFisicoService';
import UpdateProntuarioExameFisicoService from '../services/UpdateProntuarioExameFisicoService';

export default class ProntuarioExameFisicoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProntuarioExameFisico = new ListProntuarioExameFisicoService();

    const prontuariosExameFisico = await listProntuarioExameFisico.execute();

    return response.json(prontuariosExameFisico);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const showProntuarioExameFisico = new ShowProntuarioExameFisicoService();

    const prontuarioExameFisico = await showProntuarioExameFisico.execute({ idExameFisico: Number(request.params.idExameFisico) });

    return response.json(prontuarioExameFisico);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idProntuario, dataRegistro, descricao, status } = request.body;

    const createProntuarioExameFisico = new CreateProntuarioExameFisicoService();

    const prontuarioExameFisico = await createProntuarioExameFisico.execute({
      idProntuario,
      dataRegistro,
      descricao,
      status,
    });

    return response.json(prontuarioExameFisico);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { idExameFisico } = request.params;
    const { dataRegistro, descricao, status } = request.body;

    const updateProntuarioExameFisico = new UpdateProntuarioExameFisicoService();

    const prontuarioExameFisico = await updateProntuarioExameFisico.execute({
      idExameFisico: Number(idExameFisico),
      dataRegistro,
      descricao,
      status,
    });

    return response.json(prontuarioExameFisico);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const deleteProntuarioExameFisico = new DeleteProntuarioExameFisicoService();

    await deleteProntuarioExameFisico.execute({ idExameFisico: Number(request.params.idExameFisico) });

    return response.json([]);
  }
}
