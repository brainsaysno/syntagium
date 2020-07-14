import requests
import re
from bs4 import BeautifulSoup

ALLOWED_WEBSITES = {
    "allrecipes.com/recipe/": {
        "title": "h1.headline",
        "author": ".author-name",
        "description": "div.recipe-summary>p",
        "prep_mins": ".recipe-meta-container>div>:nth-child(3)>.recipe-meta-item-body",
        "ingredients": ".ingredients-item-name",
        "directions": ".paragraph>p",
        "image_url": "div.ugc-photos-link",
        "image_attribute": "data-src"
    },
    "epicurious.com/recipes/food/": {
        "title": "h1",
        "author": ".contributor",
        "description": ".dek p",
        "prep_mins": "dd.total-time",
        "ingredients": ".ingredient",
        "directions": ".preparation-step",
        "image_url": "#recipeapp-mount-point .loaded",
        "image_attribute": "srcset"
    },
    "tudiscovery.com/foodnetwork/recetas": {
        "title": ".bmEHHw",
        "author": "Food Network",
        "description": "No hay descripción",
        "prep_mins": ".dYlSGx:nth-child(1) .hqfTeN",
        "ingredients": ".dqohiM",
        "directions": ".bMkeqD",
        "image_url": ".gEVFPJ .eGHNJB",
        "image_attribute": "src"
    },
    "site3214": {
        "title": "",
        "author": "",
        "description": "",
        "prep_mins": "",
        "ingredients": "",
        "directions": "",
        "image_url": "",
        "image_attribute": "srcset"
    },
}

HEADERS = {
    'User-Agent': 'Mozilla/5.0'
}


def scrape(url):
    if any(regex_matches := [re.search(website, url) for website in ALLOWED_WEBSITES.keys()]):
        regex_match = [i for i in regex_matches if i != None]
        html = requests.get(url, headers=HEADERS)
        selectors = ALLOWED_WEBSITES[regex_match[0].group()]
        soup = BeautifulSoup(html.text, 'html.parser')
        syntagi = {}

        syntagi["title"] = soup.select(selectors["title"])[0].text.strip()
        syntagi["author"] = soup.select(selectors["author"])[0].text.strip().title() if not None else selectors["author"]
        syntagi["description"] = soup.select(selectors["description"])[0].text.strip() if not None else selectors["description"]
        syntagi["prep_mins"] = soup.select(selectors["prep_mins"])[0].text.strip()
        syntagi["ingredients"] = '\n'.join([ingredient.text.strip() for ingredient in soup.select(selectors["ingredients"])])
        syntagi["directions"] = '\n'.join([direction.text.strip() for direction in soup.select(selectors["directions"])])
        syntagi["image_url"] = soup.select(selectors["image_url"])[0].get(selectors["image_attribute"]).strip()

        return(syntagi)

    else:
        print('Esta pagina no está soportada')
        return(None)