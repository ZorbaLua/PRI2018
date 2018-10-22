
import os
import json

dirname = "../mestr/PRI/TPs/TP5/json"

print('<?xml version="1.0" encoding="UTF-8"?>')
print('<index>')

for filename in os.listdir(dirname):
    filepath = "../mestr/PRI/TPs/TP5/json/" + filename
    with open(filepath) as f:
        data = json.load(f)

    id = (data['_id'].encode('utf-8'))
    titulo = (data['titulo'].encode('utf-8'))

    print("<item>")
    jId = '<id>' + id + '</id>'
    jTitulo = '<titulo>' + titulo + '</titulo>'
    jPath = '<path>' + filename + '</path>'

    print(jId)
    print(jTitulo)
    print(jPath)

    print("</item>")
print("</index>")
