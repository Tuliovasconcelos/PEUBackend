import { getCustomRepository } from 'typeorm';
import ContatoPaciente from '../typeorm/entities/ContatoPaciente';
import ContatoPacienteRepository from '../typeorm/repositories/ContatoPacienteRepository';

interface IRequest {
  pacienteId: number;
  tipoContato: 'telefone' | 'email' | 'outro';
  valorContato: string;
}

export default class CreateContatoPacienteService {
  public async execute({
    pacienteId,
    tipoContato,
    valorContato,
  }: IRequest): Promise<ContatoPaciente> {
    const contatoPacienteRepository = getCustomRepository(
      ContatoPacienteRepository
    );

    const contatoPaciente = contatoPacienteRepository.create({
      pacienteId,
      tipoContato,
      valorContato,
    });

    await contatoPacienteRepository.save(contatoPaciente);

    return contatoPaciente;
  }
}

