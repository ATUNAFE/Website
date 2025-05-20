import datetime as dt
import urllib.parse
import requests
import unicodedata
import os

from imgurpython import ImgurClient
from time import sleep
from bs4 import BeautifulSoup
from dotenv import load_dotenv

load_dotenv()

# Imgur API credentials (replace with your credentials)
CLIENT_ID = os.getenv("WEBSCRAPER_CLIENT_ID")
CLIENT_SECRET = os.getenv("WEBSCRAPER_CLIENT_SECRET")

# Initialize Imgur client
client = ImgurClient(CLIENT_ID, CLIENT_SECRET)

# Step 1: Get the authentication URL
auth_url = client.get_auth_url('pin')
print("Go to this URL to authenticate:", auth_url)

# Step 2: Get the PIN from the user
pin_code = input("Enter the PIN code: ")

# Step 3: Get the access token using the PIN
tokens = client.authorize(pin_code, 'pin')

# Access token and refresh token are now in the 'tokens' dictionary
access_token = tokens['access_token']
refresh_token = tokens['refresh_token']

# Set the access token to authenticate future requests
client = ImgurClient(CLIENT_ID, CLIENT_SECRET, access_token, refresh_token)

# Now you can upload images with the higher rate limit
print(f"Access token: {access_token}")

def uploadImageToImgur(imageUrl):
    try:
        # Download the image
        #img_data = requests.get(imageUrl).content
        # Upload the image to Imgur
        uploaded_image = client.upload_from_url(imageUrl, config=None, anon=True)
        # Return the Imgur URL
        return uploaded_image['link']
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

URL_PREFIX = "https://www.up.pt/arquivoweb/web.fe.up.pt/paginas.fe.up.pt/_tunafe/WP/"
MEMBROS_ATUAIS = "https://www.up.pt/arquivoweb/web.fe.up.pt/paginas.fe.up.pt/_tunafe/WP/pure-theme/elementos/index.html"
FUNDADORAS = "https://www.up.pt/arquivoweb/web.fe.up.pt/paginas.fe.up.pt/_tunafe/WP/pure-theme/elementos/fundadoras/index.html"
MESTRE_TUNAS_ANTIGAS = "https://www.up.pt/arquivoweb/web.fe.up.pt/paginas.fe.up.pt/_tunafe/WP/pure-theme/elementos/mestre-tunas/index.html"
TUNAS_ANTIGAS = "https://www.up.pt/arquivoweb/web.fe.up.pt/paginas.fe.up.pt/_tunafe/WP/pure-theme/elementos/tunas/index.html"
CALOIRAS_ANTIGAS = "https://www.up.pt/arquivoweb/web.fe.up.pt/paginas.fe.up.pt/_tunafe/WP/pure-theme/elementos/caloiras/index.html"
NAME = "Nome:"
COURSE = "Curso:"
GODMOTHER = "Madrinha:"
INSTRUMENTS = [
    "bandolim",
    "contrabaixo",
    "cavaquinho",
    "estandarte",
    "acordeao",
    "flauta",
    "guitarra",
    "percussao",
    "violino",
    "pandeireta",
    "magister"
]
daysIncrement = 0

class Element:
    def __init__(self, id, name, nameC, course, godmother, instruments, image):
        self.id = id
        self.name = name
        self.nameC = nameC
        self.course = course
        self.godmother = godmother
        self.instruments = instruments
        self.image = image
    
    def getName(self):
        return self.name
    
    def getNameC(self):
        return self.nameC

    def getCourse(self):
        return self.course

    def getGodmother(self):
        return self.godmother
    
    def getInstruments(self):
        return self.instruments

    def getImage(self):
        return self.image

    def getFilename(self):
        return self.name.split()[0]

    def getInstrumentsStr(self):
        instrumentsStr = "\n"
        for instrument in self.instruments:
            instrumentsStr += """  - \"{0}\"\n""".format(instrument)
        instrumentsStr = instrumentsStr.rstrip('\n')

        return instrumentsStr

    def __str__(self):
        date = dt.datetime.now() + dt.timedelta(days=daysIncrement, weeks=-300)
        return """---
id: \"{0}\"
title:
  text: \"\"
date: \"{1}\"
name: \"{2}\"
nameC: \"{3}\"
course: \"{4}\"
godmother: \"{5}\"
instruments:{6}
image: \"{7}\"
---""".format(
    self.id,
    date.isoformat(),
    self.name,
    self.nameC,
    self.course if self.course is not None else '',
    self.godmother if self.godmother is not None else '',
    self.getInstrumentsStr(),
    self.image if self.image is not None else ''
)

atuaisElements = {
    "magister": [],
    "mestreTunas": [],
    "tunas": [],
    "caloiras": []
}
antigasElements = {
    "fundadoras": [],
    "mestreTunas": [],
    "tunas": [],
    "caloiras": []
}

html = requests.get(MEMBROS_ATUAIS)
soup = BeautifulSoup(html.content, 'html.parser')
content = soup.find('div', class_='content')

def removeAccents(palavra):
    return ''.join(c for c in unicodedata.normalize('NFD', palavra) if unicodedata.category(c) != 'Mn')


def getElementField(content, field):
    return content.find(lambda tag: tag.name == 'p' and field in tag.text).get_text().lstrip(field)

def getElement(content, prefix_id):
    strongs = content.find('h3').find_all('strong')
    if len(strongs) == 0:
        strongs = content.find_all('h3')[1].find_all('strong')
    # print(strongs)
    name = ""
    for strong in strongs:
        name += strong.get_text()
    name = name.strip()
    print(name)
    nameC = getElementField(content, NAME).strip() 

    img = content.find_all('td')[1].find_all('img')
    instruments = []
    for instrument in img:
        instrumentName = urllib.parse.unquote(instrument.get('src').split('/')[-1].split('.')[0])
        if removeAccents(instrumentName).lower() in INSTRUMENTS:
            instruments.append(removeAccents(instrumentName).lower())
    
    try:
        course = getElementField(content, COURSE).strip()
    except:
        course = None

    try:
        href = content.find('td').find('a').get('href').replace("../", "")

        image = urllib.parse.urljoin(URL_PREFIX, href).strip()
        image = uploadImageToImgur(image)

        sleep(2)
    except:
        try:
            href = content.find('td').find('img').get('src').replace("../", "")

            image = urllib.parse.urljoin(URL_PREFIX, href).strip()
            image = uploadImageToImgur(image)

            sleep(2)
        except:
            image = None

    try:
        godmother = getElementField(content, GODMOTHER).strip() 
    except:
        godmother = None
    id = prefix_id + name.split(' ', 1)[0]
    newElement = Element(id, name, nameC, course, godmother, instruments, image)
    return newElement

hierarchies = content.find_all('table')

# Magister
atuaisElements["magister"].append(getElement(hierarchies[0], "activeMembers-magister-"))

# Mestre-Tunas atuais
mestreTunas = hierarchies[1].find_all('tr')
for mestreTuna in mestreTunas:
    atuaisElements["mestreTunas"].append(getElement(mestreTuna, "activeMembers-mestreTuna-"))

# Tunas atuais
tunas = hierarchies[2].find_all('tr')
for tuna in tunas:
    atuaisElements["tunas"].append(getElement(tuna, "activeMembers-tuna-"))

# Caloiras atuais
caloiras = hierarchies[3].find_all('tr')
for caloira in caloiras:
    atuaisElements["caloiras"].append(getElement(caloira, "activeMembers-caloira-"))


# Open the markdown file and write in a loop
rootFolder = "./members/active"
for key in atuaisElements:
    members = atuaisElements[key]
    folder = rootFolder + '/' + key + '/'
    for member in members:
        fileName = folder + member.getFilename() + ".md"
        with open(fileName, 'w') as file:
            file.write(str(member))
            daysIncrement += 1


html = requests.get(FUNDADORAS)
soup = BeautifulSoup(html.content, 'html.parser')
content = soup.find('div', class_='content')

# Fundadoras
fundadoras = content.find('table').find_all('tr')
for fundadora in fundadoras:
    antigasElements["fundadoras"].append(getElement(fundadora, "inactiveMembers-fundadora-"))

html = requests.get(MESTRE_TUNAS_ANTIGAS)
soup = BeautifulSoup(html.content, 'html.parser')
content = soup.find('div', class_='content')

# Mestre-Tunas antigas
mestreTunasAntigas = content.find('table').find_all('tr')
for mestreTunaAntiga in mestreTunasAntigas:
    antigasElements["mestreTunas"].append(getElement(mestreTunaAntiga, "inactiveMembers-mestreTuna-"))

html = requests.get(TUNAS_ANTIGAS)
soup = BeautifulSoup(html.content, 'html.parser')
content = soup.find('div', class_='content')

# Tunas antigas
tunasAntigas = content.find('table').find_all('tr')
for tunaAntiga in tunasAntigas:
    antigasElements["tunas"].append(getElement(tunaAntiga, "inactiveMembers-tuna-"))

html = requests.get(CALOIRAS_ANTIGAS)
soup = BeautifulSoup(html.content, 'html.parser')
content = soup.find('div', class_='content')

# Caloiras antigas
caloirasAntigas = content.find('table').find_all('tr')
for caloiraAntiga in caloirasAntigas:
    antigasElements["caloiras"].append(getElement(caloiraAntiga, "inactiveMembers-caloira-"))

rootFolder = "./members/inactive"
for key in antigasElements:
    members = antigasElements[key]
    folder = rootFolder + '/' + key + '/'
    for member in members:
        fileName = folder + member.getFilename() + ".md"
        with open(fileName, 'w') as file:
            file.write(str(member))
            daysIncrement += 1