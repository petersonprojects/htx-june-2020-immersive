
sequelize model:generate --name user --attributes firstname:string,lastname:string,email:string --force

sequelize model:generate --name team --attributes name:string,location:string,playerID:integer --force

sequelize model:generate --name player --attributes firstname:string,lastname:string,age:integer,teamID:integer --force
