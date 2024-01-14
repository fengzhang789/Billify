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

            # Try to extract 'anes', if not, try 'tech'
            try:
                anes = row.find('td', {'data-prop': 'anes'}).text.strip().replace('$', '')
            except AttributeError:
                try:
                    anes = row.find('td', {'data-prop': 'tech'}).text.strip().replace('$', '')
                except AttributeError:
                    anes = None

            # Try to extract 'asst', if not, try 'prof'
            try:
                asst = row.find('td', {'data-prop': 'asst'}).text.strip().replace('$', '')
            except AttributeError:
                try:
                    asst = row.find('td', {'data-prop': 'prof'}).text.strip().replace('$', '')
                except AttributeError:
                    asst = None

            try:
                fee = row.find('td', {'data-prop': 'fee'}).text.strip().replace('$', '')
            except AttributeError or TypeError or ValueError:
                fee = None

            if fee == None or fee == 0 or fee == '':
                if anes and asst:
                    fee = str(float(anes) + float(asst))
                elif asst:
                    fee = asst
                elif anes:
                    fee = anes
                else:
                    fee = None

            # Append data to lists
            codes.append(code)
            titles.append(title)
            anes_list.append(anes)
            asst_list.append(asst)
            fees.append(fee)

        specialties = [speciality] * len(rows)
        
        # Create a Pandas DataFrame
        df = pd.DataFrame({
            'Speciality': specialties,
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

sob_all.to_csv('ALL_SOB_DATA_NEW.csv')
print("data exported. program done.")
