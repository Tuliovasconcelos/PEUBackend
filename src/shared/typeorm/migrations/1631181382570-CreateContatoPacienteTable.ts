import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateContatoPacienteTable1631181382570 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ContatoPaciente',
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
      }),
      true // Indica que a tabela deve ser criada com a opção "IF NOT EXISTS"
    );

    await queryRunner.createForeignKey(
      'ContatoPaciente',
      new TableForeignKey({
        columnNames: ['idPaciente'],
        referencedColumnNames: ['idPaciente'],
        referencedTableName: 'Paciente',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('ContatoPaciente');
    const foreignKey = table?.foreignKeys.find((fk) => fk.columnNames.indexOf('idPaciente') !== -1);
    if (foreignKey) {
      await queryRunner.dropForeignKey('ContatoPaciente', foreignKey);
    }
    await queryRunner.dropTable('ContatoPaciente');
  }
}
