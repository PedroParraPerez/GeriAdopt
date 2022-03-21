from werkzeug.security import generate_password_hash


data = {
    "User":[
          {
            "id":1,
            "name":"Pedro",
            "surname": "Parra",
            "email":"pedro@gmail.com",
            "password":generate_password_hash("123", method='pbkdf2:sha256'),
            "age": 27,
            "city": "Madrid",
            "address": "Madrid",
            "image": "https://res.cloudinary.com/dqhlna24b/image/upload/v1647742936/FOTO_P_segrzg.jpg",

        },
        {
            "id":2,
            "name":"Sofia",
            "surname": "Romero",
            "email":"sofia@gmail.com",
            "password":generate_password_hash("123", method='pbkdf2:sha256'),
            "age": 34,
            "city": "Madrid",
            "address": "Madrid",
            "image": "https://res.cloudinary.com/dqhlna24b/image/upload/v1647743289/foto_sofia_qurdw5.jpg",

        },
        {
            "id":3,
            "name":"Orealba",
            "surname": "Soriano",
            "email":"orealba@gmail.com",
            "password":generate_password_hash("123", method='pbkdf2:sha256'),
            "age": 30,
            "city": "Barcelona",
            "address": "Barcelona",
            "image": "https://res.cloudinary.com/dqhlna24b/image/upload/v1647743473/foto_ore_zxeisy.jpg",

        },
    ],

    "Animal": [
        {
            "id": 1,
            "name":"Raily",
            "species": "Perro",
            "gender": "M",
            "race": "Mestizo PPP",
            "size": "Mediano",
            "age": 7,
            "description":"Raily es un perro cariñoso y juguetón. Necesita una familia que le de una oportunidad y es mejor que no haya otro perro en el domicilio. Necesaria licencia PPP. Se entrega, con chip, vacunas, desparasitación, esterilización y seguro de RC. ",
            "short_description": "Raily es un perro cariñoso y juguetón, es tranquilo y noble.",
            "image": "https://res.cloudinary.com/dqhlna24b/image/upload/v1647874814/foto_animal_raily_birvhh.jpg",
        },
        {
            "id": 2,
            "name":"Ginger",
            "species": "Gato",
            "gender": "F",
            "race": "Europeo",
            "size": "Mediano",
            "age": 5,
            "description":"Ginger es super cariñosa, hermana de Donovan. Se busca adopcion sola o conjunta con Donovan.",
            "short_description": "Ginger es super cariñosa, hermana de Donovan.",
            "image": "https://res.cloudinary.com/dqhlna24b/image/upload/v1647869455/Foto%20animal%20ginger_d5hrfo.jpg",
        },
        {
            "id": 3,
            "name":"Donovan",
            "species": "Gato",
            "gender": "M",
            "race": "Europeo",
            "size": "Mediano",
            "age": 5,
            "description":"Donovan es super cariñoso y hermano de Ginger. Se busca adopcion solo o conjunta con Ginger. Si hay perros en el hogar, deben ser sociables con gatos. Es apto con conejos.",
            "short_description": "Donovan es muy amoroso, hermano de Ginger.",
            "image": "https://res.cloudinary.com/dqhlna24b/image/upload/v1647869474/Foto%20animal%20donovan_rwvqwj.jpg"
        },
        {
            "id": 4,
            "name":"Claudia",
            "species": "Perro",
            "gender": "H",
            "race": "Mestiza",
            "size": "Mediano",
            "age": 13,
            "description":"Claudia fue usada para cazar, viviendo en una rehala sin ninguna atención veterinaria. Es buena y tranquila, apta con gatos, perros y roedores.",
            "short_description": "Claudia es tranquila y muy dulce.",
            "image": "https://res.cloudinary.com/dqhlna24b/image/upload/v1647869455/Foto%20animal%20claudia_qmcq36.jpg"
        },
        {
            "id": 5,
            "name":"Bimba",
            "species": "Perro",
            "gender": "H",
            "race": "Bodeguero",
            "size": "Pequeño",
            "age": 1,
            "description":"Bimba es una perra juguetona y agradable con otros animales. Es muy cariñosa y agradecida",
            "short_description": "Muy cariñosa y agradecida.",
            "image": "https://res.cloudinary.com/dqhlna24b/image/upload/v1647869670/foto_animal_bimba_g6ur80.jpg"
        },
        ],
    "Shelter": [
        {
            "id": 1,
            "name":"SOS Peludos",
            "address": "Madrid",
            "city": "Madrid",
            "password":generate_password_hash("1234", method='pbkdf2:sha256'),
            "email": "sospeludos.es@gmail.com",
            "image": "https://res.cloudinary.com/dqhlna24b/image/upload/v1647862285/logo_prote_sos_peludo_rxyq6a.jpg",
        },
        {
            "id": 2,
            "name":"La Estrella Animal",
            "address": "Madrid",
            "city": "Madrid",
            "password":generate_password_hash("1234", method='pbkdf2:sha256'),
            "email": "laestrellaanimal@gmail.com",
            "image": "https://res.cloudinary.com/dqhlna24b/image/upload/v1647862075/logo_prote_estrella_animal_v21pjs.jpg",
        },
        {
            "id": 3,
            "name":"Animal Rescue España",
            "address": "Madrid",
            "city": "Madrid",
            "password":generate_password_hash("1234", method='pbkdf2:sha256'),
            "email": "animalrescueespaña@gmail.com",
            "image": "https://res.cloudinary.com/dqhlna24b/image/upload/v1647862075/logo_prote_animal_rescue_o55qra.png",
        },
        {
            "id": 4,
            "name":"AGAR (Asociación Amigos de los gatos del Retiro)",
            "address": "Madrid",
            "city": "Madrid",
            "password":generate_password_hash("1234", method='pbkdf2:sha256'),
            "email": "agar@gmail.com",
            "image": "https://res.cloudinary.com/dqhlna24b/image/upload/v1647862075/logo_prote_AGAR_wqck0n.png",
        },
        ]
}