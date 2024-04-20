import {
  Document,
  Page,
  Text,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";
import Chart from "../../dashboard/Chart";

type DocumentProps = {
  startDate: Date;
  endDate: Date;
  reservations: number;
};

const DocumentReport: React.FC<DocumentProps> = ({
  startDate,
  endDate,
  reservations,
}) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          - Menu Easy -
        </Text>
        <Text style={styles.title}>Reservations Between Dates</Text>
        <Text style={styles.author}>
          {new Date().toISOString().substring(19)}
        </Text>
        <Text style={styles.text}>
          {`since ${startDate} until ${endDate} had been ${reservations}.`}
        </Text>

        <View>
          <Chart />
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default DocumentReport;

{
  /* <Image
style={styles.image}
src="/images/quijote1.jpg"
/> */
}
{
  /* <Text style={styles.subtitle}>
Reservatons betwe
</Text> */
}
