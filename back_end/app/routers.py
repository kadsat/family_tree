import xml.etree.ElementTree as ET
from fastapi import APIRouter
from dependencies import xml_to_json

router = APIRouter(
    prefix= '',
    tags = ['tag'] #not sure about this
)

@router.get("/")
async def root():
    _xml = ET.parse('family.xml')
    _output = xml_to_json(_xml.getroot())
    return _output