import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateProntuarioExameFisico1685123972826 implements MigrationInterface {
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
            columnNames: ['idProntuario'],
            referencedColumnNames: ['idProntuario'],
            referencedTableName: 'prontuario',
            onDelete: 'CASCADE',
          }),
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('prontuarioExameFisico', 'FK_prontuarioExameFisico_idProntuario');
    await queryRunner.dropTable('prontuarioExameFisico');
  }
}
