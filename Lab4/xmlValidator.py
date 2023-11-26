from lxml import etree

def validate_xml_with_xsd(xml_file, xsd_file):
    try:
        xml_document = etree.parse(xml_file)
        xml_schema = etree.XMLSchema(file=xsd_file)
        
        is_valid = xml_schema.validate(xml_document)
        if is_valid:
            print("XML file is valid according to the XSD schema.")
        else:
            print("XML file is not valid according to the XSD schema.")
            for error in xml_schema.error_log:
                print("Validation error:", error.message)
    except etree.XMLSchemaError as e:
        print("Error:", e)

if __name__ == "__main__":
    xml_file_path = "2347203_Lab4.xml"
    xsd_file_path = "2347203_Lab4.xsd"
    validate_xml_with_xsd(xml_file_path, xsd_file_path)
