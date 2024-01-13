import requests
from bs4 import BeautifulSoup
import pandas as pd
import csv
import os

def sob_into_df(url, speciality):
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
            try:
                anes = row.find('td', {'data-prop': 'anes'}).text.strip()
            except AttributeError:
                anes = None

            try:
                asst = row.find('td', {'data-prop': 'asst'}).text.strip()
            except AttributeError:
                asst = None
            fee = row.find('td', {'data-prop': 'fee'}).text.strip()

            # Append data to lists
            codes.append(code)
            titles.append(title)
            anes_list.append(anes)
            asst_list.append(asst)
            fees.append(fee)
        specialties = [speciality] * len(rows)
        # Create a Pandas DataFrame
        df = pd.DataFrame({
            'Speciality':  specialties,
            'Code': codes,
            'Title': titles,
            'Anes': anes_list,
            'Asst': asst_list,
            'Fee': fees
        })

        return df
    else:
        print(f"Failed to retrieve the page. Status code: {response.status_code}")  

sob_all = pd.DataFrame()
csv_file_path = os.getcwd() + '\webscraper\output.csv'
links = []

with open(csv_file_path, 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        if row: 
            links.append(row[0]) 

for link in links:
    specialty = link.split('/specialty/', 1)[1] 
    print(specialty)
    df = sob_into_df(link, specialty)
    sob_all = pd.concat([sob_all, df], ignore_index=True)
    print(specialty + " is done")

sob_all.to_csv('ALL_SOB_DATA.csv')
print("data exported. program done.")