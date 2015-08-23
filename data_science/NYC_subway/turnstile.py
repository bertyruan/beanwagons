import csv
import pandas as pd
from datetime import datetime

def fix_turnstile_data(filenames):
	for filename in filenames:
		f_in = open(filename, 'r')
		f_out = open('updated_' + filename, 'w')
		reader = csv.reader(f_in, delimiter=',')
		writer = csv.writer(f_out, delimiter=',')

		for line in reader:
			header = [line[0], line[1], line[2]]
			writer.writerow(line[:8])

			for i in range(0, ((len(line)-3)/5) - 1):
				l_itr = 8 + (5*i)
				r_itr = l_itr + 5
				body = line[l_itr:r_itr]

				writer.writerow(header+body)
		f_in.close()
		f_out.close()

def create_master_turnstile_file(filenames, output_file):
	master_file = open(output_file, 'w')
	writer = csv.writer(master_file)
	writer.writerow(['C/A','UNIT','SCP','DATEn','TIMEn','DESCn','ENTRIESn','EXITSn'])
	for filename in filenames:
		f_in = open(filename, 'r')
		reader = csv.reader(f_in)
		for row in reader:
			writer.writerow(row)

def filter_by_regular(filename):
	subway = pd.read_csv(filename)
	turnstile_data = subway[subway.DESCn == 'REGULAR']
	return turnstile_data

def get_hourly_entries(df):
	for i in range(1, len(df['ENTRIESn'])):
		df['ENTRIESn_hourly'] = df['ENTRIESn'] - df['ENTRIESn'].shift(1)
	df.fillna(1, inplace=True)
	return df

def get_hourly_exits(df):
	for i in range(1, len(df['ENTRIESn'])):
		df['EXITSn_hourly'] = df['EXITSn'] - df['EXITSn'].shift(1)
	df.fillna(1, inplace=True)
	return df

def time_to_hour(time):
	hour = time[0].replace('0', '') + time[1]
	return int(hour)

def reformat_subway_dates(date):
	dt = datetime.strptime(date, '%m-%d-%y')
	date_formatted = dt.strftime('%Y-%m-%d')
	return date_formatted







