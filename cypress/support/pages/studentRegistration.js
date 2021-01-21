class StudentRegistration {
    _URL = 'https://demoqa.com/automation-practice-form'
    _FIRST_NAME = '#firstName'
    _LAST_NAME = '#lastName'
    _EMAIL = '#userEmail'
    _GENDER_MALE_LABEL = 'label[for=gender-radio-1]'
    _GENDER_FEMALE_LABEL = 'label[for=gender-radio-2]'
    _GENDER_OTHER_LABEL = 'label[for=gender-radio-3]'
    _PHONE_NUMBER = '#userNumber'
    _DATE_OF_BIRTH = '#dateOfBirthInput'
    _HOBBIES_SPORTS_LABEL = 'label[for=hobbies-checkbox-1]'
    _HOBBIES_READING_LABEL = 'label[for=hobbies-checkbox-2]'
    _HOBBIES_MUSIC_LABEL = 'label[for=hobbies-checkbox-3]'
    _UPLOAD_PICTURE = '#uploadPicture'
    _CURRENT_ADDRESS = '#currentAddress'
    // _STATE = '#react-select-3-input'
    // _CITY = '#react-select-4-input'
    _SUBMIT = '#submit'
    _DATE_PICKER_MONTH = 'select.react-datepicker__month-select'
    _DATE_PICKER_YEAR = 'select.react-datepicker__year-select'
    _DATE_PICKER_DAY = 'div.react-datepicker__day--0'

    visit() { cy.visit(this._URL) }
    getFirstName() { return cy.get(this._FIRST_NAME) }
    getLastName() { return cy.get(this._LAST_NAME) }
    getEmail() { return cy.get(this._EMAIL) }
    getGenderMale() { return cy.get(this._GENDER_MALE_LABEL) }
    getGenderFemale() { return cy.get(this._GENDER_FEMALE_LABEL) }
    getGenderOther() { return cy.get(this._GENDER_OTHER_LABEL) }
    getPhoneNumber() { return cy.get(this._PHONE_NUMBER) }
    getDateOfBirth() { return cy.get(this._DATE_OF_BIRTH) }
    getDatePickerMonth() { return cy.get(this._DATE_PICKER_MONTH) }
    getDatePickerYear() { return cy.get(this._DATE_PICKER_YEAR) }
    getDatePickerDay(day) { return (day > 15) ? cy.get(this._DATE_PICKER_DAY+day).last() : cy.get(this._DATE_PICKER_DAY+day).first() }
    getHobbiesSports() { return cy.get(this._HOBBIES_SPORTS_LABEL) }
    getHobbiesReading() { return cy.get(this._HOBBIES_READING_LABEL) }
    getHobbiesMusic() { return cy.get(this._HOBBIES_MUSIC_LABEL) }
    getUploadPicture() { return cy.get(this._UPLOAD_PICTURE) }
    getCurrentAddress() { return cy.get(this._CURRENT_ADDRESS) }
    // getState() { return cy.get(this._STATE) }
    // getCity() { return cy.get(this._CITY) }
    getSubmit() { return cy.get(this._SUBMIT) }
}

export default StudentRegistration