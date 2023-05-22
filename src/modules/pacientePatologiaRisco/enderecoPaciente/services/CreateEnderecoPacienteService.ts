import { getCustomRepository } from 'typeorm';
import EnderecoPaciente from '../typeorm/entities/EnderecoPaciente';
import EnderecoPacienteRepository from '../typeorm/repositories/EnderecoPacienteRepository';
import PacienteRepository from '@modules/pacientes/paciente/typeorm/repositories/PacienteRepository';

interface IRequest {
  idPaciente: number;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
}

export default class CreateEnderecoPacienteService {
  public async execute({
    idPaciente,
    endereco,
    cidade,
    estado,
    cep,
  }: IRequest): Promise<EnderecoPaciente> {
    const enderecoPacienteRepository = getCustomRepository(
      EnderecoPacienteRepository
    );

    const pacienteRepository = getCustomRepository(PacienteRepository);
    const paciente = await pacienteRepository.findById(idPaciente);

    if (!paciente) {
      throw new Error('Paciente não encontrado.');
    }

    const enderecoPaciente = enderecoPacienteRepository.create([
      {
        idPaciente: paciente,
        endereco,
        cidade,
        estado,
        cep,
      },
    ]);

    const createdEnderecoPaciente = await enderecoPacienteRepository.save(
      enderecoPaciente
    );

    return createdEnderecoPaciente[0];
  }
}
