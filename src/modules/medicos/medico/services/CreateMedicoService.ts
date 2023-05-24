import { getCustomRepository } from 'typeorm';
import Medico from '../typeorm/entities/Medico';
import MedicoRepository from '../typeorm/repositories/MedicoRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  idUsuario: number;
  nome: string;
  crm: string;
}

export default class CreateMedicoService {
  public async execute({ idUsuario, nome, crm }: IRequest): Promise<Medico> {
    const medicoRepository = getCustomRepository(MedicoRepository);

    const pacienteExists = await medicoRepository.findByName(nome);

    if (pacienteExists) {
      throw new AppError('There is already a medico with this name');
    }

    const medico = medicoRepository.create({ idUsuario, nome, crm });

    await medicoRepository.save(medico);

    return medico;
  }
}
