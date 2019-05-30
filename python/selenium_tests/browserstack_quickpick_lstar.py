from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from influxdb import InfluxDBClient

desired_cap = {
 'browser': 'Chrome',
 'browser_version': '67.0',
 'os': 'Windows',
 'os_version': '7',
 'resolution': '1024x768'
}
driver = webdriver.Remote(
     command_executor='http://arnorossouw2:5rLFezjTaJh3r3U6xyjo@hub.browserstack.com:80/wd/hub',
     desired_capabilities=desired_cap)
driver.get("https://lottostar.co.za/game/uklotteryplus/")
link = driver.find_element_by_id("quickpick_1")
link.click()
data = driver.execute_script("""
    var performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {}; var network = performance.getEntries() || {}; return network;
""", link)

if data:
  result = [item['duration'] for item in data if item.get('name') == 'https://lottostar.co.za/game/ticket/quickpick/']
         
if result:
   data = [
     { 
      "measurement": "quickpick_response_time",
      "fields": { "value" : result[0] or 0}
     }]
   client = InfluxDBClient('129.232.243.226', 8086, 'monitor', '-<cz&g;*(eV6<Q{L', 'web')
   #client.create_database('web')
   client.write_points(data)
   result = client.query('select value from quickpick_response_time;')
   print("Result: {0}".format(result))
 
#  print(result[0])

