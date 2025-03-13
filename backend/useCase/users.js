const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt')



exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.pwd, 10)
        .then(hash => {
            User.create({
                email: req.body.email,
                pwd: hash
            })
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.pwd, user.pwd)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign(
                            { userId: user.id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.updatePrefs = (req,res,next) => {
    try {
        User.update(req.body, {
          where: { id: req.params.id },
          returning: true,
        }).then(() => {
            User.findByPk(req.params.id).then(user => res.json(user))
          })
          .catch(error => console.log(error))
    
    
      } catch (error) {
        console.error("Erreur lors de la mise à jour de l'élément:", error);
        throw error;
      }
}

exports.prefs = async (req,res,next) => {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user) {
            throw new Error("Aucun élément trouvé avec cet identifiant.");
        }
        return res.status(200).json(user.dataValues.prefs)
      } catch (error) {
        console.error("Erreur lors de la récupération de l'élément:", error);
        throw error;
      }
  
}