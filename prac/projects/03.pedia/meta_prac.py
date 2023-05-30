import requests
from bs4 import BeautifulSoup

URL = 'https://movie.daum.net/moviedb/main?movieId=161806'
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(URL,headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')
#meta태그 가져오기. 여기선 다음영화를 사용한다
ogtitle = soup.select_one('meta[property="og:title"]')['content']
ogimage = soup.select_one('meta[property="og:image"]')['content']
ogdesc = soup.select_one('meta[property="og:description"]')['content']
print(ogtitle,ogdesc,ogimage)