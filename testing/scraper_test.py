import requests, re
from bs4 import BeautifulSoup

ALLOWED_WEBSITES = {
    "allrecipes.com/recipe/": {
        "title": "h1.headline",
        "author": ".author-name",
        "description": "div.recipe-summary>p",
        "prep_mins": ".recipe-meta-container>div>:nth-child(3)>.recipe-meta-item-body",
        "ingredients": ".ingredients-item-name",
        "directions": ".paragraph>p",
        "image_url": "div.ugc-photos-link" #data-src
    },
    "food.com/recipe/": {
        "title": ".recipe-title>h1",
        "author": "a.recipe-details__author-link",
        "description": "recipe-contributor__note>div>span",
        "prep_mins": ".recipe-facts__time>span:nth-child(2)",
        "ingredients": ".recipe-ingredients__ingredient",
        "directions": ".recipe-directions__step",
        "image_url": ".recipe-hero__item .recipe-image__img"
    }
}
""" 
def scrape(url):
    if any(regex_match := [re.search(website, url) for website in ALLOWED_WEBSITES.keys()]):
        html = requests.get(url)
        print(regex_match)
        selectors = ALLOWED_WEBSITES[regex_match[0].group()]
        soup = BeautifulSoup(html.text, 'html.parser')
        syntagi = {}
        
        syntagi["title"] = soup.select(selectors["title"])[0].text.strip()
        syntagi["author"] = soup.select(selectors["author"])[0].text.strip().title()
        syntagi["description"] = soup.select(selectors["description"])[0].text.strip()
        syntagi["prep_mins"] = soup.select(selectors["prep_mins"])[0].text.strip()
        syntagi["ingredients"] = '\n'.join([ingredient.text.strip() for ingredient in soup.select(selectors["ingredients"])])
        syntagi["directions"] = '\n'.join([direction.text.strip() for direction in soup.select(selectors["directions"])])
        syntagi["image_url"] = soup.select(selectors["image_url"])[0]["data-src"].strip()
        
        return(syntagi)

    else:
        print('Esta pagina no está soportada')
        return(None) """

def scrape(url):
    try:
        regex_match = next(re.search(website, url) for website in ALLOWED_WEBSITES.keys() if re.search(website, url))
        print(regex_match)
    except StopIteration:
        print('Esta pagina no está soportada')
        return(None)

print(scrape("sss"))

print(scrape("https://www.food.com/recipe/chorizo-burger-260440"))