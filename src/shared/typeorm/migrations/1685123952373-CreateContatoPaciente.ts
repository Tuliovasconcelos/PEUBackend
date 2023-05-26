import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateContatoPaciente1685123952373 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'contatoPaciente',
        columns: [
          {
            name: 'idPacienteContato',
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
            name: 'tipoContato',
            type: 'enum',
            enum: ['telefone', 'email', 'outro'],
            isNullable: false,
          },
          {
            name: 'valorContato',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['idPaciente'],
            referencedColumnNames: ['idPaciente'],
            referencedTableName: 'paciente',
            onDelete: 'CASCADE',
          })
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('contatoPaciente', 'FK_contatoPaciente_idPaciente');
    await queryRunner.dropTable('contatoPaciente');
  }
}
