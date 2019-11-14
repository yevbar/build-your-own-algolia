from algoliasearch.search_client import SearchClient
from lxml import html
from markdown import markdown
import os

client = SearchClient.create(os.environ["APPLICATION_ID"], os.environ["ALGOLIA_API_KEY"])
index = client.init_index('build_your_own_x')

html_content = ''
with open('build_your_own_x.md', 'r') as f:
    content = f.read()
    html_content = markdown(content)

page = html.fromstring(html_content)
passed_table_of_contents = False

tutorials = []
current_topic = None

for element in page:
    if element.tag == 'h2' and element.text == 'Tutorials':
        passed_table_of_contents = True
    elif element.tag == 'h4' and passed_table_of_contents:
        current_topic = list(element)[0].text if len(element) > 0 else "Uncategorized"
    elif element.tag == 'ul' and passed_table_of_contents:
        for li in element:
            for a_tag in li:
                url = a_tag.get('href')
                language = list(a_tag)[0].text
                title = list(a_tag)[1].text

                tutorials.append({
                    "topic": current_topic,
                    "url": url,
                    "language": language,
                    "title": title
                })
        if current_topic == "Uncategorized":
            passed_table_of_contents = False

res = index.save_objects(tutorials, {'autoGenerateObjectIDIfNotExist': True})
