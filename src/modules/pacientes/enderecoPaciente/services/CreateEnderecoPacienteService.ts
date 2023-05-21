import { getCustomRepository } from 'typeorm';
import EnderecoPaciente from '../typeorm/entities/EnderecoPaciente';
import EnderecoPacienteRepository from '../typeorm/repositories/EnderecoPacienteRepository';

interface IRequest {
  pacienteId: number;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
}

export default class CreateEnderecoPacienteService {
  public async execute({
    pacienteId,
    endereco,
    cidade,
    estado,
    cep,
  }: IRequest): Promise<EnderecoPaciente> {
    const enderecoPacienteRepository = getCustomRepository(
      EnderecoPacienteRepository
    );

    const enderecoPaciente = enderecoPacienteRepository.create({
      pacienteId,
      endereco,
      cidade,
      estado,
      cep,
    });

    await enderecoPacienteRepository.save(enderecoPaciente);

    return enderecoPaciente;
  }
}
