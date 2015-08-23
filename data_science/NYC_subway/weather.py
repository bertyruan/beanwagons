import pandas as pd
import pandasql as pdsql


def num_rainy_days(filename):
	weather_data = pd.read_csv(filename)
	q = "SELECT COUNT(rain) FROM weather_data WHERE rain=1"
	rainy_days = pdsql.sqldf(q.lower(), locals())

	return rainy_days
	
	'''
	output: 

	count(rain)
	10
	'''

def max_tempn_aggregate_by_fog(filename):
	weather_data = pd.read_csv(filename)
	q = "SELECT fog, MAX(maxtempi) FROM weather_data GROUP BY fog"
	foggy_days = pdsql.sqldf(q.lower(), locals())

	return foggy_days

	'''
	output

	fog     max(maxtempi)
    0             86
    1             81
	'''

def avg_weekend_temperature(filename):
	weather_data = pd.read_csv(filename)
	q = "SELECT AVG(meantempi) FROM weather_data WHERE cast (strftime('%w', date) as integer) = 0 OR cast(strftime('%w', date) as integer) = 6"
	mean_temp_weekend = pdsql.sqldf(q.lower(), locals())

	return mean_temp_weekend

	'''
	output 

    avg(meantempi)
	65.111111
	'''

def avg_min_temperature(filename):
	weather_data = pd.read_csv(filename)
	q = "SELECT AVG(mintemp) FROM weather_data WHERE mintempi > 55 AND rain=1"
	avg_min_temp_rainy = pdsql.sqldf(q.lower(), locals())

	return avg_min_temp_rainy

	'''
	output

	avg(mintempi)
	61.25
	'''