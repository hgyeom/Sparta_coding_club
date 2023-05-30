from pymongo import MongoClient

#mongodb 연결
client = MongoClient('mongodb+srv://sparta:test@cluster0.9us23my.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta
target_title = '존 윅 4'
# movie = db.movies.find_one({'title':target_title})
# print(movie['rate'])

# target_star = movie['rate']
# movies = list(db.movies.find({'rate':target_star},{'_id':False}))
# for a in movies:
#     print(a['title'])

db.movies.update_one({'title':target_title},{'$set':{'rate':0}})