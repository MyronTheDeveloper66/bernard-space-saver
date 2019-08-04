import { CustomerSelection } from './CustomerSelection';

export class Email {
    firstName: string;
    lastName: string;
    email: string;
    products: CustomerSelection[];
    comments?: string;
}