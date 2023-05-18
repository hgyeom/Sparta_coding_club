from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster0.9us23my.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

# 저장 - 예시
# doc = {'name':'맹구','age':5}
# db.users.insert_one(doc)

# 한 개 찾기 - 예시
# user = db.users.find_one({'name':'짱구'})

# 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
# all_users = list(db.users.find({},{'_id':False}))

# 바꾸기 - 예시
# db.users.update_one({'name':'짱구'},{'$set':{'age':'영원한 5살'}})

# 지우기 - 예시
# db.users.delete_one({'name':'맹구'})