const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
    console.log('Recebendo solicitação para enviar e-mail...');

    // Substitua estas credenciais com as suas
    const user = 'laishelen@sapo.pt';
    const pass = 'La321417996';

    let transporter = nodemailer.createTransport({
        host: 'smtp.sapo.pt',
        port: 587,
        secure: false, // Defina como true se o servidor de e-mail exigir conexão segura (SSL/TLS)
        auth: {
        user: user,
        pass: pass
        }
    });

    let mailOptions = {
        from: user,
        to: req.body.to, // O destinatário é passado a partir do corpo da solicitação
        subject: req.body.subject,
        text: req.body.message
    };

    // Envie o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.error("Erro ao enviar o e-mail:", error);
        res.status(500).send(error);
        } else {
        console.log("Mensagem enviada: %s", info.messageId);
        res.send("E-mail enviado com sucesso");
        }
    });
    
    } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).send('Erro ao enviar o e-mail');
    }
});

module.exports = router;
