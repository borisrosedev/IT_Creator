db = db.getSiblingDB('it_creator');
db.devices.insertOne(
    { 
      name: "PC de Bureau n°1", 
      type: "PC",
      price: 800, 
      url: "https://i.pinimg.com/736x/a4/39/68/a43968bf7f3f12af06d0a49be25591db.jpg" 
    }
);

db.users.insertOne(
  {
    email: "boris@gmail.com",
    role: "admin",
    password: "?10.admin.10?"
  }
);