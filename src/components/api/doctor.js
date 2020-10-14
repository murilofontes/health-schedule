const patient = {
  getAvailableDoctors () {
    let mock = [{
      name: 'Dr John Crude',
      CRM: '123456',
      speciality: 'Urologista'
    },
    {
      name: 'Dr Ana Luiza',
      CRM: '654321',
      speciality: 'Oncologista'
    }]
    return mock
  },
  getAvailableHoursByDoctor (doctor) {
    let mock = [{

    }]
    return mock
  }
}
export default patient
