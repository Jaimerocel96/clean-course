(() => {
    type Gender = 'M' | 'F';
    class Person{
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthdate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email:   string,
            public role:    string,
            name:           string,
            gender:         Gender,
            birthdate:      Date,
        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }   
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory:    string,
            public lastOpenFolder:      string,
            email:                      string,
            role:                       string,
            name:                       string,
            gender:                     Gender,
            birthdate:                  Date,
        ){
            super(email, role, name, gender, birthdate);
        }
    }


    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'test@test.com',
        'Admin',
        'Jaime',
        'M',
        new Date('1996-01-04'));
    
    console.log({ userSettings });

})();