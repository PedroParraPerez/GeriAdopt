"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

from api.models import db, User, Animal, Shelter
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def login():
    
    email, password = request.json.get('email', None), request.json.get('password', None)
    
    if not (email and password):
        return jsonify({'message': 'Data not provided'}), 400

    # traer de mi base de datos un usuario por su email
    user = User.query.filter_by(email=email).one_or_none()
    if not email:
        return jsonify({'message': 'Email is not valid'}), 404

    # comprobar si la contraseña es correcta
    if not check_password_hash(user.password, password):
        return jsonify({'message': 'Your pass doesn"t match'}), 500

    token = create_access_token(identity=user.id)

    
    return jsonify({'token':token}), 200


@api.route('/signup', methods=["POST"])
def signUp():


    name = request.json.get('name', None)
    surname = request.json.get('surname', None)
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    passwordrepeat = request.json.get('passwordrepeat', None)
    age = request.json.get('age', None)
    city = request.json.get('city', None)
    address = request.json.get('address', None)

    if not (name and surname and email and password and age and city and address and passwordrepeat):
        return jsonify({'message': 'Data not provided'}), 400

    hash_password = generate_password_hash(password)
    user = User(name=name, surname=surname, email=email, password=hash_password, age=age, city=city, address=address)
    try:

        db.session.add(user)
        db.session.commit()
        token = create_access_token(identity=user.id)
        return jsonify({'token': token}), 201

    except Exception as err:
        print(str(err))
        return jsonify({'message': str(err)}), 500


 # Authorization: Bearer <token> => si no viene 401
@api.route('/user', methods=['GET'])
@jwt_required()
def getUserInfo():

    userId = get_jwt_identity()
    user = User.query.get(userId)
    if user:
        return jsonify({"validate": True})
    else:
        return jsonify({"validate": False})


@api.route('/animal', methods=['GET'])
def get_all_dogs():
    animals = Animal.query.all()
    return jsonify({'results': list(map(lambda animal: animal.serialize(), animals))}),200



@api.route('/detailanimal/<int:id>', methods=['GET'])
def get_animal_by_id(id):
    animal = Animal.query.get(id)
    return jsonify({'results': animal.serialize()}),200