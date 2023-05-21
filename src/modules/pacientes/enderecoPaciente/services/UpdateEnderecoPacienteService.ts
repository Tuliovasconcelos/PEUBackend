import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import EnderecoPaciente from '../typeorm/entities/EnderecoPaciente';
import EnderecoPacienteRepository from '../typeorm/repositories/EnderecoPacienteRepository';

interface IRequest {
  id: string;
  pacienteId: number;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
}

export default class UpdateEnderecoPacienteService {
  public async execute({
    id,
    pacienteId,
    endereco,
    cidade,
    estado,
    cep,
  }: IRequest): Promise<EnderecoPaciente> {
    const enderecoPacienteRepository = getCustomRepository(
      EnderecoPacienteRepository
    );

    const enderecoPaciente = await enderecoPacienteRepository.findById(id);

    if (!enderecoPaciente) {
      throw new AppError('Endereço do paciente não encontrado.');
    }

    enderecoPaciente.pacienteId = pacienteId;
    enderecoPaciente.endereco = endereco;
    enderecoPaciente.cidade = cidade;
    enderecoPaciente.estado = estado;
    enderecoPaciente.cep = cep;

    await enderecoPacienteRepository.save(enderecoPaciente);

    return enderecoPaciente;
  }
}

