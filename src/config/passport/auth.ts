// JWT - start
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import * as lo from 'lodash';
import { apiUsers, IApiUser } from './api_users';
import passport from 'passport';
import * as moment from 'moment'; 
import * as jwt from 'jwt-simple';
import { SHA3Hash } from 'sha3';

export class Auth {
    public initialize = () => {
        passport.use(this.getStrategy());
        return passport.initialize();
    }
    public authenticate = (callback: any) => passport.authenticate('jwt', { session: false, failWithError: true }, callback);

    public login = async (req: any, res: any) => {

        try {
            const user: IApiUser = await lo.find(apiUsers, { 'name': req.body.username }) as IApiUser;

            if (user === undefined) throw 'User not found or invalid password';
            if (user === null) throw 'User not found or invalid password';

            if (user && user.password && user.password == this.hashPassword(req.body.password)) {
                res.status(200).json(this.genToken(user));
            } else {
                throw 'User not found or invalid password';
            }

   
        } catch (err) {
            res.status(401).json({ 'message': 'Invalid credentials', 'errors': err });
        }
    }

    private hashPassword = (pass: string) => {
        const d = new SHA3Hash(224);
        d.update((pass) ? pass : '');
        return d.digest('hex');
    }
    private genToken = (user: IApiUser): Object => {
        const expires = moment.utc().add({ days: 7 }).unix();
        const token = jwt.encode({
            exp: expires,
            user: user.name,
            id: user.id,
        }, process.env.JWT_SECRET);

        return {
            token: token,
            expires: moment.unix(expires).format(),
            user: user.id
        };
    }

    private getStrategy = (): Strategy => {
        const params = {
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // jwtFromRequest: ExtractJwt.fromAuthHeader(),
            passReqToCallback: true
        };

        return new Strategy(params, (req: any, payload: any, done: any) => {

            const user: IApiUser = lo.find(apiUsers, {
                id: payload.id,
                name: payload.user
            }) as IApiUser;

            if (user && user.id) {
                return done(null, { id: user.id, name: user.name });
            } else {
                return done(null, false, { message: 'The user in the token was not found' });
            }
        });
    }

}
