class UserService {
  constructor() {}

  getUser(data) {
    return {
      id: data.id,
      name: "John",
      age: 30,
      country: "Perú",
    };
  }
}

export default UserService;
