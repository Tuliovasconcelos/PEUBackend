import { EntityRepository, Repository } from 'typeorm';
import EnderecoPaciente from '../entities/EnderecoPaciente';

@EntityRepository(EnderecoPaciente)
export default class EnderecoPacienteRepository extends Repository<EnderecoPaciente> {
  public async findById(id: number): Promise<EnderecoPaciente | null> {
    const enderecoPaciente = await this.findOne({
      where: { idEndereco: id },
    });
    return enderecoPaciente || null;
  }

  public async findAll(): Promise<EnderecoPaciente[]> {
    const enderecosPacientes = await this.find();
    return enderecosPacientes;
  }

  // You can add more specific methods based on your application's needs
}
