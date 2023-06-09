import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreatePacientePrograma1685123980244 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pacientePrograma',
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
            enum: ['A', 'I'],
            default: "'A'",
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
            columnNames: ['idPaciente'],
            referencedTableName: 'paciente',
            referencedColumnNames: ['idPaciente'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idPrograma'],
            referencedTableName: 'programa',
            referencedColumnNames: ['idPrograma'],
            onDelete: 'CASCADE',
          })
        ]
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('pacientePrograma', 'FK_pacientePrograma_idPaciente');
    await queryRunner.dropForeignKey('pacientePrograma', 'FK_pacientePrograma_idPrograma');
    await queryRunner.dropTable('pacientePrograma');
  }
}
