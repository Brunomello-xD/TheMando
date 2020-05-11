const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    //retorna a quantidade total de tópicos
    const [count] = await connection("topics").count();

    //irá retorna 5 tópicos por página
    const topics = await connection("topics")
      .join("users", "users.id", "=", "topics.user_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "topics.*",
        "users.name",
        "users.username",
        "users.email",
        "users.password",
      ]);

    response.header("X-Total-Count", count["count(*)"]);

    return response.json(topics);
  },

  async create(request, response) {
    const { title, description } = request.body;
    const user_id = request.headers.authorization;

    const [id] = await connection("topics").insert({
      title,
      description,
      user_id,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const user_id = request.headers.authorization;

    const topic = await connection("topics")
      .where("id", id)
      .select("user_id")
      .first();

    if (topic.user_id !== user_id) {
      return response.status(401).json({ error: "Operation not permitted." });
    }

    await connection("topics").where("id", id).delete();

    return response.status(204).send();
  },
};
