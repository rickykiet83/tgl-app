import { IAuthenticatedUser } from './../interfaces/auth-user.interface';
export class UserModel implements IAuthenticatedUser {
    oid: string;
    given_name: string;
    family_name: string;
    name: string;
    emails: string[] = [];


    constructor(id: string, firstName: string, lastName: string, name: string, emails: string[]) {
        this.oid = id || null;
        this.given_name = firstName || null;
        this.family_name = lastName || null;
        this.name = name || null;
        this.emails = emails || [];
    }

    get fullName(): string {
        return this.given_name + ' ' + this.family_name;
    }

    get email(): string {
        return this.emails[0];
    }

}