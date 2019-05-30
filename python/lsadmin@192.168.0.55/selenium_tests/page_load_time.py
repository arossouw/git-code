from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from pyvirtualdisplay import Display


def get_load_time_page(url, element, delay):
	browser.get(url)
        data = []
	try:
	    myElem = WebDriverWait(browser, delay).until(EC.presence_of_element_located((By.ID, element)))
	    data = browser.execute_script("""
	    var performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {}; var network = performance.getEntries() || {}; return network;
	    """, myElem)

	except TimeoutException:
	    return "Loading took too much time!"
    
        if data:
           result = [elem['duration'] for elem in data if elem.get('name') == url]
       
        if result:
           return result

url = 'https://lottostar.co.za/'
timeout = 10
web_element_id = 'home-carousel-slides'
display = Display(visible=0, size=(800, 600))
display.start()
browser = webdriver.Chrome()
data = get_load_time_page(url, web_element_id, timeout)
browser.quit()
display.stop()
print(data[0])
