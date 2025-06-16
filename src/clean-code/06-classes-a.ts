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

    const newPerson = new Person('Jaime', 'M', new Date('1996-01-04'));

    console.log({newPerson});

})();