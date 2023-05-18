import requests
from bs4 import BeautifulSoup

URL = "https://www.genie.co.kr/chart/top200?ditc=M&rtm=N&ymd=20230101"
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(URL, headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')
# print(soup)

top_music = soup.select('#body-content > div.newest-list > div > table > tbody > tr')
# print(top_music)
for v in top_music:
    rank = v.select_one('td.number').text[0:2].strip()
    title = v.select_one('td.info > a.title.ellipsis').text.strip()
    artist = v.select_one('td.info > a.artist.ellipsis').text
    print(rank, title, artist)