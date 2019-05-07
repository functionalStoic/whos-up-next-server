import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialStucture1557201915409 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "event" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "person" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "description" text NOT NULL, "categoryId" integer, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "category" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "event_people_person" ("eventId" integer NOT NULL, "personId" integer NOT NULL, CONSTRAINT "PK_b8f4bbb87bc312853f270aa6091" PRIMARY KEY ("eventId", "personId"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_e54f7284c34a74913812be6144" ON "event_people_person" ("eventId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_1a8f4fbf53969336b1c879f6aa" ON "event_people_person" ("personId") `
    );
    await queryRunner.query(
      `ALTER TABLE "person" ADD CONSTRAINT "FK_a495c1aa84c9d1efe5b4e7197d2" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "event_people_person" ADD CONSTRAINT "FK_e54f7284c34a74913812be61446" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "event_people_person" ADD CONSTRAINT "FK_1a8f4fbf53969336b1c879f6aa5" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "event_people_person" DROP CONSTRAINT "FK_1a8f4fbf53969336b1c879f6aa5"`
    );
    await queryRunner.query(
      `ALTER TABLE "event_people_person" DROP CONSTRAINT "FK_e54f7284c34a74913812be61446"`
    );
    await queryRunner.query(
      `ALTER TABLE "person" DROP CONSTRAINT "FK_a495c1aa84c9d1efe5b4e7197d2"`
    );
    await queryRunner.query(`DROP INDEX "IDX_1a8f4fbf53969336b1c879f6aa"`);
    await queryRunner.query(`DROP INDEX "IDX_e54f7284c34a74913812be6144"`);
    await queryRunner.query(`DROP TABLE "event_people_person"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "category"`);
    await queryRunner.query(`DROP TABLE "person"`);
    await queryRunner.query(`DROP TABLE "event"`);
  }
}
