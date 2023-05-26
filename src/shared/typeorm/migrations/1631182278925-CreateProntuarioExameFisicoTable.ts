import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateProntuarioExameFisicoTable1631182278925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'prontuarioExameFisico',
        columns: [
          {
            name: 'idDadoExameFisico',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idProntuario',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'dataRegistro',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'descricao',
            type: 'text',
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
            columnNames: ['idProntuario'],
            referencedColumnNames: ['idProntuario'],
            referencedTableName: 'prontuario',
            onDelete: 'CASCADE',
          }),
        ],
      }),
      true
    );

    await queryRunner.createPrimaryKey('prontuarioExameFisico', ['idDadoExameFisico']);

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('prontuarioExameFisico', 'FK_prontuarioExameFisico_idProntuario');
    await queryRunner.dropTable('prontuarioExameFisico');
  }
}
