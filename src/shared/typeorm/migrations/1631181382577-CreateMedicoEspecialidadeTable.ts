import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateMedicoEspecialidadeTable1631181382577 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'MedicoEspecialidade',
        columns: [
          {
            name: 'idMedicoEspecialidade',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idMedico',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'idEspecialidade',
            type: 'int',
            isNullable: false,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['idMedico'],
            referencedColumnNames: ['idMedico'],
            referencedTableName: 'Medico',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idEspecialidade'],
            referencedColumnNames: ['idEspecialidade'],
            referencedTableName: 'Especialidade',
            onDelete: 'CASCADE',
          }),
        ],
      }),
      true // Indica que a tabela deve ser criada com a opção "IF NOT EXISTS"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('MedicoEspecialidade');
  }
}
