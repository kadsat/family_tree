import xml.etree.ElementTree as ET
from fastapi import APIRouter
from dependencies import xml_to_json

ROUTER = APIRouter(
    prefix= '',
    tags = ['tag'] #not sure about this
)

@ROUTER.get("/")
async def root():
    _xml = ET.parse('family.xml')
    _output = xml_to_json(_xml.getroot())
    return _output