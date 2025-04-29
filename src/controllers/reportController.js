const PDFDocument = require("pdfkit");

const heroiModel = require("../models/heroiModel");

const exportHeroPDF = async (req, res) => {
    try {
        const heros = await heroiModel.getHeros();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=heros.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        //Título
        doc.fontSize(20).text("Relatório de Heróis", {align: "center"});
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Id | Nome | Editora", {underline: true});
        doc.moveDown(0.5);

        //Add dados dos heróis
        heros.forEach((hero) => {
            doc.text(
                `${hero.id} | ${hero.name} | ${hero.publisher_name || "Sem Editora"}`
            );
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF" });
    }
}

module.exports = { exportHeroPDF };