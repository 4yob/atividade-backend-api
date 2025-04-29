const heroiModel = require("../models/heroiModel");

const getAllHeros = async (req, res) => {
    try {
        const { name } = req.query;
        const heros = await heroiModel.getHeros(name);
        res.json(heros);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar heróis." });
    }
};

const getHero = async (req, res) => {
    try {
        const hero = await heroiModel.getHeroById(req.params.id);
        if (!hero) {
            return res.status(404).json({ message: "Herói não encontrado." });
        }
        res.json(hero);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar herói." });
    }
};

const createHero = async (req, res) => {
    try {
        const { name, publisher_id } = req.body;
        const newHero = await heroiModel.createHero(name, publisher_id);
        res.status(201).json(newHero);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar herói." });
    }
};

const updateHero = async (req, res) => {
    try {
        const { name, publisher_id } = req.body;
        const updatedHero = await heroiModel.updateHero(req.params.id, name, publisher_id);
        if (!updatedHero) {
            return res.status(404).json({ message: "Herói não encontrado." });
        }
        res.json(updatedHero);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar herói." });
    }
};

const deleteHero = async (req, res) => {
    try {
        const message = await heroiModel.deleteHero(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar herói." });
    }
};

module.exports = { getAllHeros, getHero, createHero, updateHero, deleteHero };