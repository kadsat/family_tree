import os
import xml.etree.ElementTree as ET
from fastapi import APIRouter
from .dependencies import xml_to_json

router = APIRouter(
    prefix= '',
    tags = ['tag'] #not sure about this
)

@router.get("/")
async def root():
    tree = ET.parse(os.path.dirname(__file__) + '/family.xml')
    _output = xml_to_json(tree.getroot())
    return _output