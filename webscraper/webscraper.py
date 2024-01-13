import requests
from bs4 import BeautifulSoup
import pandas as pd
import csv
import os

print("Current Working Directory:", os.getcwd())

def sob_into_df(url):
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        # Find all rows with the specified classes
        rows = soup.find_all('tr', class_=['', 'even'])

        # Initialize lists to store extracted data
        codes, titles, anes_list, asst_list, fees = [], [], [], [], []

        for row in rows:
            # Extract data from each row
            code = row.find('td', {'data-prop': 'code'}).text.strip()
            title = row.find('td', {'data-prop': 'title'}).text.strip()
            anes = row.find('td', {'data-prop': 'anes'}).text.strip()
            asst = row.find('td', {'data-prop': 'asst'}).text.strip()
            fee = row.find('td', {'data-prop': 'fee'}).text.strip()

            # Append data to lists
            codes.append(code)
            titles.append(title)
            anes_list.append(anes)
            asst_list.append(asst)
            fees.append(fee)

        # Create a Pandas DataFrame
        df = pd.DataFrame({
            'Code': codes,
            'Title': titles,
            'Anes': anes_list,
            'Asst': asst_list,
            'Fee': fees
        })

        # Print or further process the DataFrame as needed
        print(df)
        return df
    else:
        print(f"Failed to retrieve the page. Status code: {response.status_code}")  

csv_file_path = '/webscraper/output.csv'
links = []

with open(csv_file_path, 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        if row:  # Check if the row is not empty
            links.append(row[0]) 

print(links)