import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Paciente from '../typeorm/entities/Paciente';
import PacienteRepository from '../typeorm/repositories/PacienteRepository';

interface IRequest {
  nome: string;
  dataNascimento: Date;
  genero: string;
}

export default class CreatePacienteService {
  public async execute({ nome, dataNascimento, genero }: IRequest): Promise<Paciente> {
    const pacientesRepository = getCustomRepository(PacienteRepository);

    const pacienteExists = await pacientesRepository.findByName(nome);

    if (pacienteExists) {
      throw new AppError('There is already a paciente with this name');
    }

    const paciente = pacientesRepository.create({
      nome,
      dataNascimento,
      genero,
      status: 'ativo', // Defina o status inicial aqui
      dataAlteracao: new Date(), // Defina a data de alteração inicial aqui
    });

    await pacientesRepository.save(paciente);

    return paciente;
  }
}

