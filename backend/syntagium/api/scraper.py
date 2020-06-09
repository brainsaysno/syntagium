import requests, re
from bs4 import BeautifulSoup

ALLOWED_WEBSITES = {
    "allrecipes.com/recipe/": {},
}

def scrape(url):
    if any(regex_match := [re.search(website, url) for website in ALLOWED_WEBSITES.keys()]):
        website = regex_match[0].group()
        print(website)
    else:
        print('Esta pagina no está soportada')


scrape("https://www.allrecipes.com/recipe/158968/spinach-and-feta-turkey-burgers/?internalSource=previously%20viewed&referringContentType=Homepage&clickId=cardslot%202")

# https://www.allrecipes.com/recipe/