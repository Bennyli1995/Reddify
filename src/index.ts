import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  // Fork the EntityManager
  // const em = orm.em.fork();

  // const post = em.create(Post, {
  //   title: "my first post",
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // } as Post);

  // await em.persistAndFlush(post);
};

main();
