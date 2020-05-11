const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const incidents = await connection("topics").select("*");

    return response.json(incidents);
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
