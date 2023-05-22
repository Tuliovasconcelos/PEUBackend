import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';
import { instanceToInstance } from 'class-transformer';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return response.json(instanceToInstance(users));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, email, senha, idTipoUsuario } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      nome,
      email,
      senha,
      idTipoUsuario
    });

    return response.json(instanceToInstance(user));
  }
}
