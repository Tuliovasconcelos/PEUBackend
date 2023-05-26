import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class CreatePacienteTable1631181382569 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'paciente',
        columns: [
          {
            name: 'idPaciente',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idUsuario',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'nome',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'dataNascimento',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'genero',
            type: 'enum',
            enum: ['masculino', 'feminino', 'outro'],
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['ativo', 'inativo'],
            isNullable: false,
          },
          {
            name: 'dataAlteracao',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['idUsuario'],
            referencedColumnNames: ['idUsuario'],
            referencedTableName: 'usuario',
            onDelete: 'CASCADE',
          })
        ],
      }),
      true,
    );
    await queryRunner.createPrimaryKey('paciente', ['idPaciente']);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('paciente', 'FK_paciente_idUsuario');
    await queryRunner.dropTable('paciente');
  }
}
