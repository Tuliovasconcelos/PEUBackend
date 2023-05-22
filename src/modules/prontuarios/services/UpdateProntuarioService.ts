import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Prontuario from '../typeorm/entities/Prontuario';
import ProntuarioRepository from '../typeorm/repositories/ProntuarioRepository';

interface IRequest {
  idProntuario: number;
  idPaciente: number;
}

export default class UpdateProntuarioService {
  public async execute({ idProntuario, idPaciente }: IRequest): Promise<Prontuario> {
    const prontuarioRepository = getCustomRepository(ProntuarioRepository);
    const prontuario = await prontuarioRepository.findById(idProntuario);

    if (!prontuario) {
      throw new AppError('Prontuário not found.');
    }

    prontuario.idPaciente = idPaciente;

    await prontuarioRepository.save(prontuario);

    return prontuario;
  }
}
