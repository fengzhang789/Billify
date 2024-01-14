import requests

def get_medical_definition(word, api_key):
    base_url = "https://www.dictionaryapi.com/api/v3/references/medical/json/"
    url = f"{base_url}{word}?key={api_key}"

    try:
        response = requests.get(url)
        response.raise_for_status()  # Check for errors in the HTTP response

        # Assuming the response is a JSON array (as in your example)
        data = response.json()

        return data

    except requests.exceptions.HTTPError as errh:
        print(f"HTTP Error: {errh}")
    except requests.exceptions.ConnectionError as errc:
        print(f"Error Connecting: {errc}")
    except requests.exceptions.Timeout as errt:
        print(f"Timeout Error: {errt}")
    except requests.exceptions.RequestException as err:
        print(f"Error: {err}")

# Replace 'your-api-key' with your actual Merriam-Webster API key
api_key = '513c2f38-de23-4473-babc-46cbec2858d6'
word = 'crohn\'s disease'

result = get_medical_definition(word, api_key)

def keyinfo(result):
    shortdef = result[0].get('shortdef')[0]

print(result[0].get('shortdef')[0])

