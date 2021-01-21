import StudentRegistration from '../support/pages/studentRegistration'

describe('Given I want to register as a student', () => {
    beforeEach(() => {
        const studentRegistration = new StudentRegistration();
        studentRegistration.visit();
        cy.wrap(studentRegistration).as('studentRegistration');
        cy.fixture('testData.json').then((testData) => {
            cy.fixture('images/student.jpg').then((image) => {
                testData.studentRegistration.picture = {
                    fileContent: image.toString(),
                    fileName: 'image.jpg',
                    mimeType: 'image/jpg'
                }
                cy.wrap(testData.studentRegistration).as('registrationData');
            });
        });
    });

    it('should succeed the registration when I fill the form correctly', function () {
        this.studentRegistration.getFirstName().type(this.registrationData.firstName);
        this.studentRegistration.getLastName().type(this.registrationData.lastName);
        this.studentRegistration.getEmail().type(this.registrationData.email);
        switch (this.registrationData.gender) {
            case 'Male':
                this.studentRegistration.getGenderMale().click();
                break;
            case 'Female':
                this.studentRegistration.getGenderFemale().click();
                break;
            case 'Other':
                this.studentRegistration.getGenderOther().click();
                break;
        }

        this.studentRegistration.getPhoneNumber().type(this.registrationData.phone);
        this.studentRegistration.getDateOfBirth().click();
        this.studentRegistration.getDatePickerYear().select(this.registrationData.dateOfBirth.year);
        this.studentRegistration.getDatePickerMonth().select(this.registrationData.dateOfBirth.month);
        this.studentRegistration.getDatePickerDay(this.registrationData.dateOfBirth.day).click();

        this.registrationData.hobbies.forEach((element) => {
            switch (element) {
                case 'Sports':
                    this.studentRegistration.getHobbiesSports().click();
                    break;
                case 'Music':
                    this.studentRegistration.getHobbiesMusic().click();
                    break;
                case 'Reading':
                    this.studentRegistration.getHobbiesReading().click();
                    break;
            }
        });

        this.studentRegistration.getUploadPicture().attachFile(this.registrationData.picture);

        this.studentRegistration.getCurrentAddress().type(this.registrationData.address);

        this.studentRegistration.getSubmit().click();

        // Check table for data sent!
    });

    it('should inform me the required fields when I try to submit empty fields', function () {
        this.studentRegistration.getSubmit().click();

        // Required fields
        this.studentRegistration.getFirstName().isInvalid();
        this.studentRegistration.getLastName().isInvalid();
        // Email field is required but the form allows it to be submitted without any text so test will fail
        this.studentRegistration.getEmail().isInvalid();
        this.studentRegistration.getGenderMale().hasError();
        this.studentRegistration.getGenderFemale().hasError();
        this.studentRegistration.getGenderOther().hasError();
        this.studentRegistration.getPhoneNumber().isInvalid();

        // Optional fields
        this.studentRegistration.getDateOfBirth().isValid();
        this.studentRegistration.getHobbiesMusic().hasNoError();
        this.studentRegistration.getHobbiesSports().hasNoError();
        this.studentRegistration.getHobbiesReading().hasNoError();
        this.studentRegistration.getCurrentAddress().isValid();
    });

    it('should inform me when my email does not match the valid format', function () {
        this.studentRegistration.getSubmit().click();

        this.studentRegistration.getEmail().clear().type(this.registrationData.emailWithSpecialCharacter);
        this.studentRegistration.getEmail().isInvalid();

        this.studentRegistration.getEmail().clear().type(this.registrationData.emailWithSpace);
        this.studentRegistration.getEmail().isInvalid();

        this.studentRegistration.getEmail().clear().type(this.registrationData.emailWithMissingDot);
        this.studentRegistration.getEmail().isInvalid();

        this.studentRegistration.getEmail().clear().type(this.registrationData.emailWithMissingAt);
        this.studentRegistration.getEmail().isInvalid();

        this.studentRegistration.getEmail().clear().type(this.registrationData.email);
        this.studentRegistration.getEmail().isValid();
    });

    it('should inform me when my phone number does not match the requirements', function () {
        this.studentRegistration.getSubmit().click();

        // For some reason when Cypress types this number it recognises it as valid but when you type manually it doesn't
        this.studentRegistration.getPhoneNumber().clear().type(this.registrationData.phoneTooShort);
        this.studentRegistration.getPhoneNumber().isInvalid();

        this.studentRegistration.getPhoneNumber().clear().type(this.registrationData.phoneWithSpace);
        this.studentRegistration.getPhoneNumber().isInvalid();

        this.studentRegistration.getPhoneNumber().clear().type(this.registrationData.phoneWithSpecialCharacter);
        this.studentRegistration.getPhoneNumber().isInvalid();

        this.studentRegistration.getPhoneNumber().clear().type(this.registrationData.phoneWithLetter);
        this.studentRegistration.getPhoneNumber().isInvalid();

        this.studentRegistration.getPhoneNumber().clear().type(this.registrationData.phone);
        this.studentRegistration.getPhoneNumber().isValid();
    });

    it('should inform me when my date of birth it is not a possible date', function () {
        this.studentRegistration.getFirstName().type(this.registrationData.firstName);
        this.studentRegistration.getLastName().type(this.registrationData.lastName);
        this.studentRegistration.getEmail().type(this.registrationData.email);
        switch (this.registrationData.gender) {
            case 'Male':
                this.studentRegistration.getGenderMale().click();
                break;
            case 'Female':
                this.studentRegistration.getGenderFemale().click();
                break;
            case 'Other':
                this.studentRegistration.getGenderOther().click();
                break;
        }

        this.studentRegistration.getPhoneNumber().type(this.registrationData.phone);
        this.studentRegistration.getDateOfBirth().click();
        this.studentRegistration.getDatePickerYear().select(this.registrationData.futureDateOfBirth.year);
        this.studentRegistration.getDatePickerMonth().select(this.registrationData.futureDateOfBirth.month);
        this.studentRegistration.getDatePickerDay(this.registrationData.futureDateOfBirth.day).click();

        this.studentRegistration.getSubmit().click();

        // It doesn't verify if the Date of Birth is valid so it'll always fail
        this.studentRegistration.getDateOfBirth().isInvalid();
    });
});