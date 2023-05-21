import { EntityRepository, Repository } from 'typeorm';
import ContatoPaciente from '../entities/ContatoPaciente';

@EntityRepository(ContatoPaciente)
export default class ContatoPacienteRepository extends Repository<ContatoPaciente> {
  // Implemente métodos personalizados, se necessário
}

