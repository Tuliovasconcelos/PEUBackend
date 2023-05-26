import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateMedicoEspecialidadeTable1631181382577 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'medicoEspecialidade',
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
            referencedTableName: 'medico',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idEspecialidade'],
            referencedColumnNames: ['idEspecialidade'],
            referencedTableName: 'especialidade',
            onDelete: 'CASCADE',
          }),
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('medicoEspecialidade', 'FK_medicoEspecialidade_idMedico');
    await queryRunner.dropForeignKey('medicoEspecialidade', 'FK_medicoEspecialidade_idEspecialidade');
    await queryRunner.dropTable('medicoEspecialidade');
  }
}
