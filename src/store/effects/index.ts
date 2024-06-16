// import { HeroEffects } from './hero.effects';
import * as usersEffects from './users.effects';


export const EffectsArray: any[] = [usersEffects.loadUsers$, usersEffects.loadUser$]