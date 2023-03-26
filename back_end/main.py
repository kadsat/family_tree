import json
import xml.etree.ElementTree as ET
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from family_parser import xml_to_json

app = FastAPI()

origins = [
    #"http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    _xml = ET.parse('family.xml')
    _output = xml_to_json(_xml.getroot())
    '''
    with open('family_test.json','w') as json_file:
        json_file.write(json.dumps(_output, indent=4))
    '''
    return _output