import { EntityRepository, Repository } from 'typeorm';
import { EnderecoPaciente } from '../entities/EnderecoPaciente';

@EntityRepository(EnderecoPaciente)
export default class EnderecoPacienteRepository extends Repository<EnderecoPaciente> {
  // Implemente métodos personalizados, se necessário
}

