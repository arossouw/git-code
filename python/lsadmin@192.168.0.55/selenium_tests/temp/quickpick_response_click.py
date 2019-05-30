#!/home/arno/code/python/selenium_tests/temp/env/bin/python

import random
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from influxdb import InfluxDBClient
from pyvirtualdisplay import Display
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException

pages = [
  'https://lottostar.co.za/game/africamillions/',
  'https://lottostar.co.za/game/uklotteryplus/',
  'https://lottostar.co.za/game/ozmonday/',
  'https://lottostar.co.za/game/superenalotto/'
]

random_page = random.choice(pages)
print("Performing quickpick on {}".format(random_page))

delay = 15
chrome_bin = '/home/arno/chromedriver'
quickpick_url = 'https://lottostar.co.za/game/ticket/quickpick/'
display = Display(visible=0, size=(800, 600))
display.start()
driver = webdriver.Chrome()
driver.get(random_page)

try:
   link = driver.find_element_by_id("quickpick_1")
   myElem = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.ID, 'quickpick_1')))
   link.click()
   data = driver.execute_script("""
    var performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {}; var network = performance.getEntries() || {}; return network;
    """, link)
except TimeoutException:
   print "Request took too long"


if data:
  result = [item['duration'] for item in data if item.get('name') == quickpick_url]
        
 
if result:
   data = [
     { 
      "measurement": "quickpick_response_time",
      "fields": { "value" : result[0] or 0}
     }]
   client = InfluxDBClient('129.232.243.226', 8086, 'monitor', '-<cz&g;*(eV6<Q{L', 'web')
   client.create_database('web')
   client.write_points(data)
   print("Quickpick successfull")
   #result = client.query('select value from quickpick_response_time;')
   #print("Result: {0}".format(result))

driver.quit()
display.stop()
