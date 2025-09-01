import openai
from dotenv import dotenv_values

config = dotenv_values(".env")

openai.api_key = config['API_KEY']

def generate_recipe(recipe_topic):
    response = openai.completions.create(
        model = 'gpt-3.5-turbo-instruct',
        prompt = "Write an easy to follow recipe about the following topic. " + recipe_topic,
        max_tokens = 400,
        temperature = 0.3
    )

    retrieve_recipe = response.choices[0].text
    return retrieve_recipe

keep_writing = True

while keep_writing:
    answer = input("Write another recipe? Write Y for yes, anything else for no.")
    if (answer == 'Y'):
        recipe_topic = input("What should the recipe be? ")
        print(generate_recipe(recipe_topic))
    else:
        keep_writing = False

print(generate_recipe("Mac and Cheese"))