const pool = require("../config/database");

const getPublishers = async () => {
    const result = await pool.query("SELECT * FROM publishers");
    return result.rows;
};

const getPublisherById = async (id) => {
    const result = await pool.query("SELECT * FROM publisher WHERE id = $1", [id]);
    return result.rows[0];
};

const createPublisher = async (name) => {
    const result = await pool.query(
        "INSERT INTO houses (name) VALUES ($1) RETURNING *",
        [name]
    );
    return result.rows[0];
};

const updatePublisher = async (id, name) => {
    const result = await pool.query(
        "UPDATE publisher SET name = $1 WHERE id = $2 RETURNING *",
        [name, id]
    );
    return result.rows[0];
};

const deletePublisher = async (id) => {
    const result = await pool.query("DELETE FROM publishers WHERE id = $1 RETURNING *", [id]);

    return { message: `Editora de id ${id} deletada com sucesso.` };
}

module.exports = { getPublishers, getPublisherById, createPublisher, updatePublisher, deletePublisher };