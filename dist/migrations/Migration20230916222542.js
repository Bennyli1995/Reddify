"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230916222542 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230916222542 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "created_at" varchar(255) not null, "updated_at" varchar(255) not null, "title" varchar(255) not null);');
    }
    async down() {
        this.addSql('drop table if exists "post" cascade;');
    }
}
exports.Migration20230916222542 = Migration20230916222542;
//# sourceMappingURL=Migration20230916222542.js.map