import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Paciente from '../../../paciente/typeorm/entities/Paciente';

@Entity('EnderecoPaciente')
export default class EnderecoPaciente {
    @PrimaryGeneratedColumn()
    idEndereco: number;

    @ManyToOne(() => Paciente, (paciente: Paciente) => paciente.enderecos)
    paciente: Paciente;

    @Column()
    endereco: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @Column()
    cep: string;
}

