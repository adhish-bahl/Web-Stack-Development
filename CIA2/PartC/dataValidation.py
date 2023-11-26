from lxml import etree

def validate_xml_with_xsd(xml_file, xsd_file):
    try:
        xml_document = etree.parse(xml_file)
        xml_schema = etree.XMLSchema(file=xsd_file)
        
        is_valid = xml_schema.validate(xml_document)
        if is_valid:
            print("XML file is valid according to the XSD schema.")

            xml_tree = etree.parse("2347203_dogs.xml")
            xsl_transform = etree.XSLT(etree.parse("2347203_dogs.xsl"))
            html_tree = xsl_transform(xml_tree)
            with open("index.html", "wb") as output_file:
                output_file.write(etree.tostring(html_tree, pretty_print=True))

        else:
            print("XML file is not valid according to the XSD schema.")
            for error in xml_schema.error_log:
                print("Validation error: ", error.message)
    except etree.XMLSchemaError as e:
        print("Error:", e)

xml_file_path = "./2347203_dogs.xml"
xsd_file_path = "./2347203_dogs.xsd"
validate_xml_with_xsd(xml_file_path, xsd_file_path)