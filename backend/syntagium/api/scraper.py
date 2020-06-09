import requests, re
from bs4 import BeautifulSoup

ALLOWED_WEBSITES = {
    "allrecipes.com/recipe/": {
        "title": "h1.headline",
        "author": "a.author-name",
        "description": "div.recipe-summary>p",
        "prep_time": ".recipe-meta-container>div>:nth-child(3)>.recipe-meta-item-body",
        "ingredients": ".ingredients-item-name",
        "directions": ".paragraph>p",
        "image": ".ugc-photos-link.image-loaded" #data-src
    },
}

def scrape(url):
    if any(regex_match := [re.search(website, url) for website in ALLOWED_WEBSITES.keys()]):
        selectors = ALLOWED_WEBSITES[regex_match[0].group()]
        print(selectors)

    else:
        print('Esta pagina no está soportada')



scrape("https://www.allrecipes.com/recipe/158968/spinach-and-feta-turkey-burgers/?internalSource=previously%20viewed&referringContentType=Homepage&clickId=cardslot%202")

# https://www.allrecipes.com/recipe/