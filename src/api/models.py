from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

#     def __repr__(self):
#         return '<User %r>' % self.username



# Many to Many likes
likes = db.Table('likes',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('animal_id', db.Integer, db.ForeignKey('animal.id'), primary_key=True)
)


class User(db.Model):
    __tablename__: "useranimal"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    surname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(240), unique=False, nullable=False)
    age = db.Column(db.Integer, unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    image = db.Column(db.String(240), unique=False, nullable=True)
    animalsfav = db.relationship('Animal', secondary=likes, lazy='subquery', backref=db.backref('this user likes these animals', lazy=True))
    

    # def __repr__(self):
    #     return '<User> %r %s', (self.id, self.username)

    def __repr__(self):
        return f'<User> {self.id} {self.name}'

    # Si quiero que en cada usuario tenga una columna que me permita ver todos los favs que tiene, tengo que introducir esta columna.


    def serialize(self):
        return {
            'id':self.id,
            'name':self.name,
            'surname':self.surname,
            'email':self.email,
            'age':self.age,
            'city':self.city,
            'address':self.address,
            'image':self.image,
            'likes': [favorite.serialize() for favorite in self.animalsfav]
        }


class Animal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    species = db.Column(db.String(120), unique=False, nullable=False)
    gender = db.Column(db.String(120), unique=False, nullable=False)
    race = db.Column(db.String(120), unique=False, nullable=False)
    size = db.Column(db.String(120), unique=False, nullable=False)
    age = db.Column(db.Integer, unique=False, nullable=False)
    description = db.Column(db.String(240), unique=False, nullable=False)
    short_description = db.Column(db.String(80), unique=False, nullable=False)
    image = db.Column(db.String(240), unique=False, nullable=True)
    
    shelter_id = db.Column(db.Integer, db.ForeignKey('shelter.id'), nullable=True)
    # Establecemos la relacion OnToMany crando la columna en Animal e indicandole la id de la protectora con el ForignKeY. Pongo que nullable = true para que sea mas facil de ver en la practica de los ejemplos

    def serialize(self):
        return {
            'id':self.id,
            'name':self.name,
            'species':self.species,
            'gender':self.gender,
            'race':self.race,
            'size':self.size,
            'age':self.age,
            'description':self.description,
            'short_description':self.short_description,
            'image':self.image,
            'shelter':Shelter.query.get(self.shelter_id).serialize()
        }

        
class Shelter(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(240), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    image = db.Column(db.String(240), unique=False, nullable=True)
    tlf = db.Column(db.String(240), unique=False, nullable=True)
    animals = db.relationship('Animal', backref='shelter', lazy=True)
    # Mandamos la informacion de la ID de la protectora atraves de la relationship indicandole la table a la que se la mandamos "Animal"

    def serialize(self):
        return {
            'id':self.id,
            'name':self.name,
            'email':self.email,
            'city':self.city,
            'address':self.address,
            'image':self.image,
            'tlf':self.tlf,
            # 'animals':Animal.query.get(self.animals).serialize()
        }





