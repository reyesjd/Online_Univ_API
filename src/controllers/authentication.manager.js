import jsonwebtoken from 'jsonwebtoken';
import moment from 'moment';
const textoSecreto = 'Esto es un Secreto XD';

export const checkToken = (req, res, next) => {
	const token = req.headers['x-access-token'];
	if (!token) {
		res.status(403).json({
			auth: false,
			message: 'No token provided',
		});
	} else {
		try {
			const decoded = jsonwebtoken.verify(token, textoSecreto);
			if (decoded.exp < moment().unix()) {
				res.status(401).json({
					auth: false,
					message: 'Token has expired',
				});
			} else {
				req.user = decoded.sub.id;
				next();
			}
		} catch (err) {
			res.status(400).json(err);
		}
	}
};

export const createToken = (user) => {
	const payload = {
		sub: { id: user.id },
		iat: moment().unix(),
		exp: moment().add(1, 'days').unix(),
	};
	return jsonwebtoken.sign(payload, textoSecreto);
};
