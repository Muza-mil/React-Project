export class User {
    firstName: String;
    lastName: String;
    email: String;
    Phone: number;
    company: String;

    setUserData(fName: String, lName: String, email: String, phone: number, company: String){
        this.firstName = fName;
        this.lastName = lName;
        this.email = email;
        this.Phone = phone;
        this.company = company;
    }
}