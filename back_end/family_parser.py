import xml.etree.ElementTree as ET

def xml_to_json(parent :ET.Element) -> dict[str,str] | dict[str,list]:
    if parent.tag == 'family':
        _return = {
            child.tag : child.text
            for child in parent
            if child.tag not in ('children')
        }
        _return['children'] = [
            xml_to_json(gc)
            for child in parent.findall('children')
            for gc in child
        ]
        return _return
    return {
        parent.tag : parent.text
    }    

if __name__ == '__main__':
    pass