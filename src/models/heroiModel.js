const pool = require("../config/database");

const getHeros = async (name) => {
    if(!name) {
        //Se não houver nome, retorna todos os bruxos
        const result = await pool.query(
        `   SELECT heros.*, publishers.name AS publisher_name
            FROM heros
            LEFT JOIN publishers ON heros.publisher_id = publishers.id
        `
    );
    return result.rows;
    } else {
        //Se tiver name, faça o filtro
        const result = await pool.query(
            `   SELECT heros.*, publishers.name AS publisher_name
                FROM heros
                LEFT JOIN publishers ON heros.publisher_id = publishers.id
                WHERE heros.name ILIKE $1
            `, [`%${name}%`]
        );
        return result.rows;
    }
};

const getHeroById = async (id) => {
    const result = await pool.query(
        `SELECT heros.*, publishers.name AS publisher_name 
        FROM heros
        LEFT JOIN publishers ON heros.publisher_id = publishers.id
        WHERE heros.id = $1`, [id]
    );
    return result.rows[0];
};

const createHero = async (name, publisher_id, photo) => {
    const result = await pool.query(
        "INSERT INTO heros (name, publisher_id, photo) VALUES ($1, $2, $3) RETURNING *",
        [name, publisher_id, photo]
    );
    return result.rows[0];
};

const updateHero = async (id, name, publisher_id) => {
    const result = await pool.query(
        "UPDATE heros SET name = $1, publisher_id = $2 WHERE id = $3 RETURNING *",
        [name, publisher_id, id]
    );
    return result.rows[0];
};

const deleteHero = async (id) => {
    const result = await pool.query("DELETE FROM heros WHERE id = $1 RETURNING *", [id]);
    return { message: `Herói de id ${id} deletado com sucesso.` };
};

module.exports = { getHeros, getHeroById, createHero, updateHero, deleteHero };