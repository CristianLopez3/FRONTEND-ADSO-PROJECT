import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";

type Props = {
  quantity: number;
  startDate: Date;
  endDate: Date;
};

const ReportBetweenDates: React.FC<Props> = ({
  quantity,
  startDate,
  endDate,
}) => {
  return (
    
      <Document pageLayout="singlePage">
        <Page size={"A4"} style={styles.body}>
          <Text style={styles.title}>Reservations Between June and July</Text>

          <Text style={styles.text} wrap>
            Between {`${startDate.getUTCDate()} ${startDate.toISOString().substring(9)}`} and{" "}
            {`${endDate.getUTCMonth()} ${endDate.getUTCDay()}`} there were{" "}
            {`${quantity}`} reservations
          </Text>
        </Page>
      </Document>

  );
};

export default ReportBetweenDates;

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  page: {
    padding: 10,
    fontSize: 12,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontWeight: 800,
    fontSize: 34,
    color: "#000",
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
});
