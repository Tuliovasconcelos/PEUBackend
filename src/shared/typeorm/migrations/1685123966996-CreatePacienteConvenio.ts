import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreatePacienteConvenio1685123966996 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pacienteConvenio',
        columns: [
          {
            name: 'idPacienteConvenio',
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
            name: 'idConvenio',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'numeroCarteira',
            type: 'varchar',
            length: '50',
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
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['idPaciente'],
            referencedColumnNames: ['idPaciente'],
            referencedTableName: 'paciente',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idConvenio'],
            referencedColumnNames: ['idConvenio'],
            referencedTableName: 'convenio',
            onDelete: 'CASCADE',
          }),
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('pacienteConvenio', 'FK_pacienteConvenio_idPaciente');
    await queryRunner.dropForeignKey('pacienteConvenio', 'FK_pacienteConvenio_idConvenio');
    await queryRunner.dropTable('pacienteConvenio');
  }
}
