import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Paciente from '../typeorm/entities/Paciente';
import PacienteRepository from '../typeorm/repositories/PacienteRepository';

interface IRequest {
  idPaciente: number;
  nome: string;
  dataNascimento: Date;
  genero: string;
}

export default class UpdatePacienteService {
  public async execute({ idPaciente, nome, dataNascimento, genero }: IRequest): Promise<Paciente> {
    const pacientesRepository = getCustomRepository(PacienteRepository);

    const paciente = await pacientesRepository.findById(idPaciente);

    if (!paciente) {
      throw new AppError('Paciente not found.');
    }

    paciente.nome = nome;
    paciente.dataNascimento = dataNascimento;
    paciente.genero = genero;

    await pacientesRepository.save(paciente);

    return paciente;
  }
}
