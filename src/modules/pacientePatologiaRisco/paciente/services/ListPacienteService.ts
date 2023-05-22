import { getCustomRepository } from 'typeorm';
import Paciente from '../typeorm/entities/Paciente';
import PacienteRepository from '../typeorm/repositories/PacienteRepository';

export default class ListPacienteService {
  public async execute(): Promise<Paciente[]> {
    const pacienteRepository = getCustomRepository(PacienteRepository);
    const pacientes = await pacienteRepository.find();

    return pacientes;
  }
}
