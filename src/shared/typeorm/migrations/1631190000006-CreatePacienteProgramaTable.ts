import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreatePacienteProgramaTable1631190000006 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'PacientePrograma',
        columns: [
          {
            name: 'idPacientePrograma',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idPaciente',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'idPrograma',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['ativo', 'inativo'],
            default: "'ativo'",
            isNullable: false,
          },
          {
            name: 'dataAlteracao',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'PacientePrograma',
      new TableForeignKey({
        columnNames: ['idPaciente'],
        referencedTableName: 'Paciente',
        referencedColumnNames: ['idPaciente'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'PacientePrograma',
      new TableForeignKey({
        columnNames: ['idPrograma'],
        referencedTableName: 'Programa',
        referencedColumnNames: ['idPrograma'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('PacientePrograma', 'FK_PacientePrograma_idPaciente');
    await queryRunner.dropForeignKey('PacientePrograma', 'FK_PacientePrograma_idPrograma');
    await queryRunner.dropTable('PacientePrograma');
  }
}
