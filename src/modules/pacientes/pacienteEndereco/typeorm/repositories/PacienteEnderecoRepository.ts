import { EntityRepository, Repository } from 'typeorm';
import PacienteEndereco from '../entities/PacienteEndereco';

@EntityRepository(PacienteEndereco)
export default class PacienteEnderecoRepository extends Repository<PacienteEndereco> {
  public async findById(idPacienteEndereco: number): Promise<PacienteEndereco | null> {
    const PacienteEndereco = await this.findOne({
      where: { idPacienteEndereco: idPacienteEndereco },
    });
    return PacienteEndereco || null;
  }

  public async findAll(): Promise<PacienteEndereco[]> {
    const enderecosPacientes = await this.find();
    return enderecosPacientes;
  }

  // You can add more specific methods based on your application's needs
}
