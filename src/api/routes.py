"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Animal, Shelter
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/animal', methods=['GET'])
def get_all_dogs():
    animals = Animal.query.all()
    return jsonify({'results': list(map(lambda animal: animal.serialize(), animals))}),200


@api.route('/detailanimal/<int:id>')
 def get_animal_by_id(<int:id>):
    animal = Animal.query.get(id)
    return jsonify({'results': list(map(lambda detailanimal: animal.serialize(), animal))}),200