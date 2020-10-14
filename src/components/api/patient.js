const patient = {
  getAvailableDoctors () {
    let mock = [{
      name: 'Dr John Crude',
      CRM: '123456'
    },
    {
      name: 'Dr Ana Luiza',
      CRM: '654321'
    }]
    return new Promise(function (resolve) {
      resolve(mock)
    })
  },
  getAvailableHoursByDoctor () {
    let mock = [{
    }]
    return mock
  }
}
export default patient
