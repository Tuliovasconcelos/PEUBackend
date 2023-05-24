import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Prontuario from '../typeorm/entities/Prontuario';
import ProntuarioRepository from '../typeorm/repositories/ProntuarioRepository';

interface IRequest {
  idPaciente: number;
}

export default class CreateProntuarioService {
  public async execute({ idPaciente }: IRequest): Promise<Prontuario> {
    const prontuarioRepository = getCustomRepository(ProntuarioRepository);

    const prontuarioFound = await prontuarioRepository.findByPaciente(idPaciente);

    if (!prontuarioFound) {
      throw new AppError('Prontuário has been found for this Paciente.');
    }

    const prontuario = prontuarioRepository.create({
      idPaciente,
      status: 'ativo', // Defina o status inicial aqui
      dataAlteracao: new Date(), // Defina a data de alteração inicial aqui
    });

    await prontuarioRepository.save(prontuario);

    return prontuario;
  }
}
