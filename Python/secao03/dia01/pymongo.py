from pymongo import MongoClient

client = MongoClient()
db = client.catalogue  # o banco catalogue sera criado se nao existir
student = db.books  # a colecao books sera criada se nao existir

book = {
    "title": "A light in the Attic",
}
document_id = db.books.insert_one(book).inserted_id
print(document_id)

documents = [
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]
db.books.insert_many(documents)

client.close()  # fecha a conexao com o banco de dados
