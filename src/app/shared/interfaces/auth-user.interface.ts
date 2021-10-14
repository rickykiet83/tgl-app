
export interface IAuthenticatedUser {
    oid: string;
    given_name: string;
    family_name: string;
    name: string;
    emails: string[];
}