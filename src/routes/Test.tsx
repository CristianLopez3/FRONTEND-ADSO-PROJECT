import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const DocumentPdf = () => {
  return (
    <Document>
      <Page size="A4">
        <Text>There is some text for our first pdf</Text>
      </Page>
    </Document>
  );
};

const Test = () => {
  return (
    <>
      <div className="bg-red-500 p-10">Test</div>
      <PDFDownloadLink document={<DocumentPdf />} fileName="Table.pdf">
        {({ loading }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink>
    </>
  );
};

export default Test;
