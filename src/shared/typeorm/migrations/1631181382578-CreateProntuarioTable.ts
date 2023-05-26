import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateProntuarioTable1631181382578 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'prontuario',
        columns: [
          {
            name: 'idProntuario',
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
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('prontuario', 'FK_prontuario_idPaciente');
    await queryRunner.dropTable('prontuario');
  }
}
